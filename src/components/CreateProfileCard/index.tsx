import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Style from "./style"

const CreateUserCard = () =>{

    const [profilePicture, setProfilePicture]= useState<string>("https://ovicio.com.br/wp-content/uploads/2022/04/20220417-vader01-ovicio-555x555.jpg")

    if(profilePicture==="") setProfilePicture("https://ovicio.com.br/wp-content/uploads/2022/04/20220417-vader01-ovicio-555x555.jpg")

    const navegate= useNavigate()

    return(
        <Style.CreateUserCardContainer>

                <header>
                    <p className="register">Criar Perfil</p>
                    <p className="comeBack" onClick={()=> navegate("/createUser")}>Voltar</p>
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

export default CreateUserCard