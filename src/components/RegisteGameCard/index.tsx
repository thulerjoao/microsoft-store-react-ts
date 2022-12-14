import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useGames } from "../../contexts/games"
import { useGenres } from "../../contexts/genres"
import { api } from "../../services"
import * as Style from "./style"


const RegisteGameCard = () =>{

    const token = localStorage.getItem("token")
    const navegate= useNavigate()
    const {genres}= useGenres()
    const {handleGetGame} = useGames()
    
    const [ name, setName ] = useState<string>("")
    const [ imbd, setImbd ] = useState<number>(5)
    const [ year, setYear ] = useState<number>(2000)
    const [ trailer, setTrailer ] = useState<string>("")
    const [ gameplay, setGameplay ] = useState<string>("")
    const [ genre, setGenre ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    const [gameImg, setGameImg] = useState<string>("https://t.ctcdn.com.br/_ALSW0x5t7hbdO7pVxYqXW84Auc=/512x288/smart/filters:format(webp)/i570476.png")
    if(gameImg==="") setGameImg("https://t.ctcdn.com.br/_ALSW0x5t7hbdO7pVxYqXW84Auc=/512x288/smart/filters:format(webp)/i570476.png")
    
    interface GameData {
        title: string,
        coverImageUrl: string,
        description: string,
        year: number,
        imdbScore: number,
        trailerYoutubeUrl: string,
        gameplayYoutubeUrl: string,
        genreName: string
    }

    const newGameData:GameData={
        title: name,
        coverImageUrl: gameImg,
        description: description,
        year: year,
        imdbScore: imbd,
        trailerYoutubeUrl: trailer,
        gameplayYoutubeUrl: gameplay,
        genreName: genre
    }

    const headers = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }

    const handleGamePost= ()=>{
        if(name !=="" && imbd <= 5 && imbd >= 0 && trailer !=="" && gameplay !=="" && genre !=="" && description !=="" && gameImg !==""){
            api.post("/game", newGameData, headers)
            .then((res)=>{handleGetGame(); toast.success("Jogo cadastrado com sucesso!"); navegate("/settings")})
            .catch(err=>{toast.error("Falha ao cadastrar o jogo"); console.log(genre)})
        }else{
            toast.error("Entradas inv??lidas")
        }
    }

    return(
        <Style.RegisteGameCardContainer>

                <header>
                    <p className="topPhrase">Cadastro</p>
                    <p className="comeBack" onClick={()=> navegate("/settings")}>Voltar</p>
                </header>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Jogos</h2>
                    <div className="descritionAndImage">
                        <img src={gameImg} alt="Imagem do jogo" />
                        <input className="imgInput"type="text" placeholder="URL da imagem do jogo" onChange={e=>setGameImg(e.target.value)}/>
                    </div>

                    <form>
                        <div>
                            <input type="text" placeholder="Nome do jogo" value={name} onChange={e=>setName(e.target.value)}/>
                            <input type="number" placeholder="IMBD Score [1-5]" value={imbd} onChange={e=>setImbd(e.target.valueAsNumber)}/>
                            <input type="number" placeholder="Ano de lan??amento" value={year} onChange={e=>setYear(e.target.valueAsNumber)}/>
                        </div>
                        <div>
                            <input type="text" placeholder="Trailer URL" value={trailer} onChange={e=>setTrailer(e.target.value)}/>
                            <input type="text" placeholder="Gameplay URL" value={gameplay} onChange={e=>setGameplay(e.target.value)}/>
                            <div className="chooseAndChangeGenre">
                                <p>G??nero</p>
                                <select value={genre} onChange={e => setGenre(e.target.value)}>
                                    {genres.map((element, index)=>
                                    <option value={element.id} key={index}>
                                        {element.name}
                                    </option>)}
                                </select>
                            </div>                   
                        </div>
                    </form>
                    <div className="description">
                        <textarea  placeholder="Descri????o..." id="msg" name="msg" value={description} onChange={e=>setDescription(e.target.value)}></textarea>   
                    </div>
                        
                    
                </div>
                <button onClick={()=>handleGamePost()}>Cadastrar</button>
            
        </Style.RegisteGameCardContainer>
    )
}

export default RegisteGameCard

function useGame(): { handleGetGame: any } {
    throw new Error("Function not implemented.")
}
