import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Style from "./style"

const EditProfileCard = () =>{

    const [profilePicture, setProfilePicture]= useState<string>("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    if(profilePicture==="") setProfilePicture("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    const navegate= useNavigate()

    return(
        <Style.EditUserCardContainer>

                <header>
                    <p className="register">Editar Perfil</p>
                    <p className="comeBack" onClick={()=> navegate("/selectProfile")}>Voltar</p>
                </header>
                <div>
                    <img className="logo"src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <img className="profilePicture" src={profilePicture} alt="Imagem de Perfil" />
                    <form onSubmit={()=>{}}>
                        <input type="text" placeholder="Url da imagem de Perfil" onChange={e => setProfilePicture(e.target.value)}/>
                        <input type="text" placeholder="Nome do Perfil"/>
                        <div className="buttons">
                            <button className="registerButton" type="submit">Atualizar</button>
                            <button className="deleteButton" type="submit">Excluir</button>
                        </div>
                    </form>
                    
                </div>
            
        </Style.EditUserCardContainer>
    )
}

export default EditProfileCard