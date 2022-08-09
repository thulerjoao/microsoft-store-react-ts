import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Game } from "../../types"
import * as Style from "./style"

interface GameListProps {
    list: Game[]
}

const SettingsCard = ({ list }:GameListProps)=> {
    const navegate = useNavigate()

    return(
        <Style.SettingsCardContainer>
                <p className="settings">Settings</p>
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
                    <div className="confirmButtons">                                 
                        <p className="button save" onClick={()=> navegate("/home")}>Salvar Alterações</p>
                        <p className="button cancel" onClick={()=> navegate("/home")}>Cancelar</p>
                    </div>
                </div>
            
        </Style.SettingsCardContainer>
    )
}

export default SettingsCard