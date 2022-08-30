import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { api } from "../../services"
import * as Style from "./style"

const EditProfileCard = () =>{

    const profile = JSON.parse(localStorage.getItem("profile") || "")
    const token = localStorage.getItem("token")

    const image:string = profile.imageUrl
    const title:string = profile.title

    const [profilePicture, setProfilePicture]= useState<string>(image)
    const [profileTitle, setProfileTitle]= useState<string>(title)

    if(profilePicture==="") setProfilePicture("https://static.vecteezy.com/ti/vetor-gratis/p1/1840618-imagem-perfil-icone-masculino-icone-humano-ou-pessoa-sinal-e-simbolo-gr%C3%A1tis-vetor.jpg")

    const navegate= useNavigate()

    interface ProfileData {
        imageUrl:string,
        title:string
    }

    const data:ProfileData ={
        imageUrl:profilePicture,
        title: profileTitle
    }

    const headers = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }



    const handlePut = (data:ProfileData)=>{
        if(profileTitle!==""){
        api.patch(`/profile/${profile.id}`, data, headers)
        .then((res)=>{navegate("/selectProfile");toast.success("Perfil atualizado!")})
        .catch(error=>toast.error("Url ou Nome inválidos"))
        }else{
            toast.error("Campo de nome obrigatório")
        }
    }

    const handleDelete = ()=>{
        api.delete(`/profile/${profile.id}`, headers)
        .then(res=>{navegate("/selectProfile");toast.success("Perfil excluido.")})
        .catch(err=>toast.error("O perfil não pode ser excluido"))
    }

    return(
        <Style.EditUserCardContainer>
                <header>
                    <p className="register">Editar Perfil</p>
                    <p className="comeBack" onClick={()=> navegate("/home")}>Voltar</p>
                </header>
                <div>
                    <img className="logo"src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <img className="profilePicture" src={profilePicture} alt="Imagem de Perfil" />
                    <div>
                        <input type="text" placeholder="Url da imagem de Perfil" value={profilePicture
                        } onChange={e => setProfilePicture(e.target.value)}/>
                        <input type="text" placeholder="Nome do Perfil" value={profileTitle} onChange={e => setProfileTitle(e.target.value)}/>
                        <div className="buttons">
                            <button className="registerButton" onClick={()=>handlePut(data)}>Atualizar</button>
                            <button className="deleteButton" onClick={()=>handleDelete()}>Excluir</button>
                        </div>
                    </div>
                </div>
                {/* <div className="confirmation">
                    <p>Deseja conformar a operação?</p>
                    <div className="confButtons">
                        <button className="registerButton" >Sim</button>
                        <button className="deleteButton" >Não</button>
                    </div>
                </div> */}
        </Style.EditUserCardContainer>
    )
}

export default EditProfileCard