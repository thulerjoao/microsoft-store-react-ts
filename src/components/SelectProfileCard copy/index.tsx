import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Style from "./style"

const SelectProfileCard = () =>{

    const [profilePicture, setProfilePicture]= useState<string>("https://ovicio.com.br/wp-content/uploads/2022/04/20220417-vader01-ovicio-555x555.jpg")

    if(profilePicture==="") setProfilePicture("https://ovicio.com.br/wp-content/uploads/2022/04/20220417-vader01-ovicio-555x555.jpg")

    const navegate= useNavigate()

    return(
        <Style.CreateUserCardContainer>

                <header>
                    <p className="entrar">Entrar</p>
                    <p className="comeBack" onClick={()=> navegate("/")}>Voltar</p>
                </header>
                <div>
                    <h2>Vamos Entrar</h2>
                    <p className="titlePhase">Utilize um destes Perfis</p>
                    <div>
                    <div className="profileCard">
                            <img src="https://f.i.uol.com.br/fotografia/2020/12/13/16079123855fd6cbc10f44e_1607912385_3x2_rt.jpg" alt="" />
                            <p>Joao Pedro Thuler Lima</p>
                            <p>*</p>
                        </div>
                        <div className="profileCard">
                            <img src="https://f.i.uol.com.br/fotografia/2020/12/13/16079123855fd6cbc10f44e_1607912385_3x2_rt.jpg" alt="" />
                            <p>Joao Pedro Thuler Lima</p>
                            <p>*</p>
                        </div>
                        <div className="profileCard">
                            <img src="https://f.i.uol.com.br/fotografia/2020/12/13/16079123855fd6cbc10f44e_1607912385_3x2_rt.jpg" alt="" />
                            <p>Joao Pedro Thuler Lima</p>
                            <p>*</p>
                        </div>
                        <div className="newProfileCard">
                            <p>Adicionar novo perfil</p>
                            <p>*</p>
                        </div>
                        <div className="logOutCard">
                            <img className="logo"src="https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Clipart.png" />        
                            <div>
                                <p className="p01">Sair da conta Microsoft</p>
                                <p className="p02">Faça login em outra conta ou cria uma nova</p>
                            </div>    
                        </div>
                        <button className="registerButton">Cadastrar</button>
                    </div>
                </div>
            
        </Style.CreateUserCardContainer>
    )
}

export default SelectProfileCard