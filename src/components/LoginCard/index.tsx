import * as Style from "./style"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios"

interface LoginProps{
    logged:boolean;
    setLogged:Dispatch<SetStateAction<boolean>>
}

const LoginCard = ({logged, setLogged}:LoginProps)=> {
const navegate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = ()=>{
        if(email!=="" && password!==""){

            const data = {
                email, 
                password
            }

            return axios.post("https://spr-nest-microsoft-store.herokuapp.com/auth",
                 data).then((res)=>{
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                    setLogged(true);
                    navegate("/home");
                    toast.success("login bem sucedido")
                 }).catch(()=>toast.error("Senha ou Email inválidos"))

        }else{
            toast.error("Senha ou Email inválidos")
        }
    }

    return(
        <Style.LoginCardContainer>
                <p className="login">Login</p>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Entrar</h2>
                    <div>
                        
                        <input type="text" placeholder="Email" required onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" placeholder="Senha" required onChange={(e)=> setPassword(e.target.value)}/>
                        
                        <div className="createAcount">
                            <p>Não tem uma conta?</p>
                            <p className="createLink" onClick={()=> toast.error('Sessão em desenvolvimento')}>Crie Uma!</p>
                        </div>
                        <p className="nextButton" onClick={()=>{handleLogin()}
                            }>Próximo</p>
                            
                    </div>
                </div>
            
        </Style.LoginCardContainer>
    )
}

export default LoginCard