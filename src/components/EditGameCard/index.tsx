import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useGames } from "../../contexts/games"
import { useGenres } from "../../contexts/genres"
import { api } from "../../services"
import * as Style from "./style"


const EditGameCard = () =>{
  

    const game = JSON.parse(localStorage.getItem("currentGame") || "")
    const token = localStorage.getItem("token")

    const navegate= useNavigate()
    const {genres}= useGenres()
    const {handleGetGame} = useGames()

    const [ name, setName ] = useState<string>(game.title)
    const [ imbd, setImbd ] = useState<number>(game.imdbScore)
    const [ year, setYear ] = useState<number>(game.year)
    const [ trailer, setTrailer ] = useState<string>(game.trailerYoutubeUrl)
    const [ gameplay, setGameplay ] = useState<string>(game.gameplayYoutubeUrl)
    const [ genre, setGenre ] = useState<string>(game.genres[0].name)
    const [ description, setDescription ] = useState<string>(game.description)
    const [gameImg, setGameImg] = useState<string>(game.coverImageUrl)
    if(gameImg==="") setGameImg(game.coverImageUrl)

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

    const handleGamePatch= ()=>{
        if(name !=="" && imbd <= 5 && imbd >= 0 && trailer !=="" && gameplay !=="" && genre !=="" && description !=="" && gameImg !==""){
            api.patch(`/game/${game.id}`, newGameData, headers)
            .then((res)=>{handleGetGame(); toast.success("Jogo atualizado com sucesso!"); navegate("/settings")})
            .catch(err=>toast.error("Falha ao atualizar o jogo"))
        }else{
            toast.error("Entradas inválidas")
        }
    }

    const handleGameDelete = () =>{
        api.delete(`/game/${game.id}`, headers)
            .then((res)=>{
                toast.success("O jogo foi excluido.");
                navegate("/settings");
                handleGetGame()})
            .catch(err=>toast.error("Falha ao tentar excluir o jogo"))
    }

    return(
        <Style.EditGameCardContainer>

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
                            <input type="number" placeholder="Ano de lançamento" value={year} onChange={e=>setYear(e.target.valueAsNumber)}/>
                        </div>
                        <div>
                            <input type="text" placeholder="Trailer URL" value={trailer} onChange={e=>setTrailer(e.target.value)}/>
                            <input type="text" placeholder="Gameplay URL" value={gameplay} onChange={e=>setGameplay(e.target.value)}/>
                            <div className="chooseAndChangeGenre">
                                <p>Gênero</p>
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
                        <textarea  placeholder="Descrição..." id="msg" name="msg" value={description} onChange={e=>setDescription(e.target.value)}></textarea>   
                    </div>  
                <div className="buttons">
                    <button className="registerButton" onClick={()=>handleGamePatch()}>Atualizar</button>
                    <button className="deleteButton" onClick={()=>handleGameDelete()}>Excluir</button>
                </div>
                </div>
            
        </Style.EditGameCardContainer>
    )
}

export default EditGameCard