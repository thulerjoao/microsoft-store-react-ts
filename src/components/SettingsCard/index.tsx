import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import * as Style from "./style"
import { useGames } from "../../contexts/games"
import { useGenres } from "../../contexts/genres"
import { useEffect, useState } from "react"
import { api } from "../../services"


const SettingsCard = ()=> {
    const navegate = useNavigate()
    const { games } = useGames()
    const { genres, handleGetGenre } = useGenres()
    const { handleGetGame } = useGames()
    const token = localStorage.getItem("token")

    const headers = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }

    const [genre,setGenre] = useState<string>("")
    const [newGenre,setNewGenre] = useState<string>("")
    const [selectValue, setSelectValue] = useState<string>("")

    interface GenreData{
        name:string
    }

    const genreData:GenreData ={
        name: genre
    }

    useEffect(()=>handleGetGenre(), [genre])
    useEffect(()=>handleGetGame(), [games])

    const handleGenrePost = ()=>{
        if(genre!==""){
            api.post("/genre", genreData, headers)
            .then(res=>{
                handleGetGenre();
                toast.success("Genero criado!")})
            .catch(err=>toast.error("Erro ao cadastrar"))
        }else{
            toast.error("Nome de gênero necessário")
        }
    }

    // OBS: AO ATUALIZAR OS GENEROS EXISTENTES(CÓDIGO ABAIXO), OS GENEROS CADASTRADOS EM JOGOS DAVAM ERRO NA APLICAÇÃO!!!

    const newGenreData:GenreData ={
        name: newGenre
    }

    const handleGenrePatch = () =>{
        if(games.filter((element)=>element.genres[0].name===selectValue).length === 0){ 
            if(newGenre!==""){
                api.patch(`/genre/${selectValue}`, newGenreData, headers)
                .then(res=>{toast.success("Gênero atualizado!"); handleGetGenre()})
                .catch(err=>toast.error("Erro ao tentar atualizar o gênero"))
            }else{
                toast.error("Nome de gênero necessário")
            }
        }else{
            toast.error("Impossível alterar gêneros com jogos cadastrados.")
        }
    }

    const handleGenreDelete = () =>{
        if(games.filter((element)=>element.genres[0].name===selectValue).length === 0){ 
                api.delete(`/genre/${selectValue}`, headers)
                .then(res=>{
                    toast.success("Gênero excluido");
                    handleGetGenre()})
                .catch(err=>toast.error("Erro ao tentar excluir o gênero"))
        }else{
            toast.error("Impossível deletar gêneros com jogos cadastrados.")
        }
    }

    return(
        <Style.SettingsCardContainer>
                    <header>
                        <p className="settings">Settings</p>
                        <p className="comeBack" onClick={()=> navegate("/home")}>Voltar</p>
                    </header>
                <div>
                    <img className="imageMicrosoft" src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Gerenciar Jogos</h2>
                    <div className="cardList">
                        <div className="plusCard" onClick={()=> navegate("/registeGame")}>
                            <p>+</p>
                            <p>Cadastrar Jogo</p>
                        </div>
                        <div className="cardMapped">
                            {games.map((element)=>{
                                return(
                                <div key={element.id} className="eachCard" onClick={()=>{
                                    localStorage.setItem("currentGame", JSON.stringify(element))
                                    navegate("/editGame")}}>                                    
                                    <img src={element.coverImageUrl} alt="Imagem do Jogo" className="cardImage"/>
                                    <p>{element.title}</p> 
                                </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2>Gerenciar Gêneros</h2>
                        <div className="genresContainer">
                            <div className="registerGenre">
                                <input type="text" placeholder="Novo gênero" onChange={e => setGenre(e.target.value)}/>
                                <p className="button save" onClick={()=>{handleGenrePost();}}>Cadastrar</p>
                            </div>
                            <div className="editGenres">
                                <div className="chooseAndChangeGenre">
                                    <input type="text" value={newGenre} placeholder={selectValue} onChange={(e)=>setNewGenre(e.target.value)}/>
                                    <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                                        {genres.map((element, index)=>
                                        <option value={element.id} key={index}>
                                            {element.name}
                                        </option>)}
                                    </select>
                                </div>
                            <div className="butonsEditGenre">
                                <p className="button save" onClick={()=>handleGenrePatch()}>Atualizar</p>
                                <p className="button cancel" onClick={()=>handleGenreDelete()}>Excluir</p>
                            </div>   
                            </div>
                        </div>
                    </div>
                    
                </div>
            
        </Style.SettingsCardContainer>
    )
}

export default SettingsCard