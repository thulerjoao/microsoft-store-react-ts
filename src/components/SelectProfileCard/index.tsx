import { profile } from "console"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/auth"
import { useProfiles } from "../../contexts/profile"
import { api } from "../../services"
import { Profile } from "../../types"

import * as Style from "./style"

const SelectProfileCard = () =>{
    
    const user = JSON.parse(localStorage.getItem("user") || "")
    const token = localStorage.getItem("token");
    const { logged, logout } = useAuth()
    const { profiles } = useProfiles()

    const [profilePicture, setProfilePicture]= useState<string>("https://ovicio.com.br/wp-content/uploads/2022/04/20220417-vader01-ovicio-555x555.jpg")

    if(profilePicture==="") setProfilePicture("https://ovicio.com.br/wp-content/uploads/2022/04/20220417-vader01-ovicio-555x555.jpg")
    
    const navegate= useNavigate()

    const handleProfile = (element:Profile)=>{
        const res = JSON.stringify(element)
        localStorage.setItem("profile", res)
        navegate("/home")
    }
    

    return(
        <Style.CreateUserCardContainer>
                <header>
                    <p className="entrar">Entrar</p>
                </header>
                <div>
                    
                    <h2>Vamos Entrar</h2>
                    <p className="titlePhase">Utilize um destes Perfis</p>
                    <div>
                            {profiles.map((element)=>{
                            if(element.userId===user.id){ 
                            return(
                            <div className="profileCard" key={element.id} onClick={()=>handleProfile(element)}>
                                <img src={element.imageUrl} alt="" />
                                <p>{element.title}</p>
                                <img onClick={()=>navegate("/editProfile")}className="config" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoC5iGHtX2tecHOGvkewML324RHaWRbimrRMr76H99YodeeherYgXm935b_Ef9nS5JkE&usqp=CAU" alt="Config"/>
                            </div>)}})}
                        <div className="newProfileCard" onClick={()=>navegate("/createProfile")}>
                            <p>Adicionar novo perfil</p>
                        </div>                       
                        <div className="logOutCard" onClick={logout}>
                            <img className="logo"src="https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Clipart.png" />        
                            <div>
                                <p className="p01">Sair da conta Microsoft</p>
                                <p className="p02">Faça login em outra conta ou cria uma nova</p>
                            </div>    
                        </div>                       
                    </div>
                </div>
          
        </Style.CreateUserCardContainer>
    )
}

export default SelectProfileCard