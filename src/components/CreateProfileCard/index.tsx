import { Console } from "console"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { api } from "../../services"
import * as Style from "./style"

const CreateProfileCard = () =>{

    const token = localStorage.getItem("token")
    const[name, setName] = useState<string>("")
    const [profilePicture, setProfilePicture]= useState<string>("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    if(profilePicture==="") setProfilePicture("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    const navegate= useNavigate()

    interface ProfileData {
        title:string,
        imageUrl:string
    }

    const data:ProfileData = {
        title:name,
        imageUrl: profilePicture
    }

    const headers = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }

    const handlePost = (data:ProfileData) =>{
        if(name!==""){
            api.post("/profile", data, headers)
            .then((res)=>{navegate("/selectProfile");toast.success("Perfil cadastrado com sucesso!")})
            .catch((res)=>{toast.error("Url ou nome inválidos")})
        }else{
            toast.error("Campo de nome obrigatório")
        }
    }


    return(
        <Style.CreateUserCardContainer>

                <header>
                    <p className="register">Criar Perfil</p>
                    <p className="comeBack" onClick={()=> navegate("/selectProfile")}>Voltar</p>
                </header>
                <div>
                    <img className="logo"src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <img className="profilePicture" src={profilePicture} alt="Imagem de Perfil" />
                    <div>
                        <input type="text" placeholder="Url da imagem de Perfil" onChange={e => setProfilePicture(e.target.value)}/>
                        <input type="text" placeholder="Nome do Perfil" onChange={e => setName(e.target.value)}/>
                        <button className="registerButton" onClick={()=>handlePost(data)}>Cadastrar</button>
                    </div>
                    
                </div>
            
        </Style.CreateUserCardContainer>
    )
}

export default CreateProfileCard