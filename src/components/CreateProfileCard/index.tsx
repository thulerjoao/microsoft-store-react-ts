import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Style from "./style"

const CreateProfileCard = () =>{

    const [profilePicture, setProfilePicture]= useState<string>("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    if(profilePicture==="") setProfilePicture("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    const navegate= useNavigate()

    return(
        <Style.CreateUserCardContainer>

                <header>
                    <p className="register">Criar Perfil</p>
                    <p className="comeBack" onClick={()=> navegate("/selectProfile")}>Voltar</p>
                </header>
                <div>
                    <img className="logo"src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <img className="profilePicture" src={profilePicture} alt="Imagem de Perfil" />
                    <form onSubmit={()=>{}}>
                        <input type="text" placeholder="Url da imagem de Perfil" onChange={e => setProfilePicture(e.target.value)}/>
                        <input type="text" placeholder="Nome do Perfil"/>
                        <button className="registerButton" type="submit">Cadastrar</button>
                    </form>
                    
                </div>
            
        </Style.CreateUserCardContainer>
    )
}

export default CreateProfileCard