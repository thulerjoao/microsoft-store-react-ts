import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Game } from "../../types"
import * as Style from "./style"
import { mockedGenres } from "../../mocks/index"

interface GameListProps {
    list: Game[]
}



const SettingsCard = ({ list }:GameListProps,)=> {
    const navegate = useNavigate()

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
                        <div className="plusCard">
                            <p>+</p>
                            <p>Cadastrar Jogo</p>
                        </div>
                        <div className="cardMapped">
                            {list.map((element, index)=>{
                                return(
                                <div key={index} className="eachCard">                                    
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
                                <input type="text" placeholder="Novo gênero"/>
                                <p className="button save" onClick={()=> toast.error("Recurso em desenvolvimento")}>Cadastrar</p>
                            </div>
                            <div className="editGenres">
                                <div className="chooseAndChangeGenre">
                                    <input type="text" placeholder="Atualizar"/>
                                    <select >
                                        {mockedGenres.map((element)=><option>{element.title}</option>)}
                                    </select>
                                </div>
                            <div className="butonsEditGenre">
                                <p className="button save" onClick={()=> toast.error("Recurso em desenvolvimento")}>Atualizar</p>
                                <p className="button cancel" onClick={()=> toast.error("Recurso em desenvolvimento")}>Excluir</p>
                            </div>   
                            </div>
                        </div>

                    </div>
                    
                </div>
            
        </Style.SettingsCardContainer>
    )
}

export default SettingsCard