import * as Style from "./style"
import toast from "react-hot-toast"
import { api } from "../../services/index"
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom";

interface loginData{
    email:string,
    password:string
}

const loginSchema = yup.object().shape({
    email:yup
    .string()
    .email("Email inválido")
    .required("Email deve ser preenchido"),
    password:yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Senha muito curta")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula")
})

const LoginCard = ()=> {

    const { register, handleSubmit, formState:{ errors }} = useForm<loginData>({ resolver: yupResolver(loginSchema)}) 
    const {login} = useAuth()
    const navegate = useNavigate()

    const handleLogin = (data:loginData)=>{
        if(data.email!=="" && data.password!==""){
            
            return api.post("/auth",
                 data).then((res)=>{
                    login({token: res.data.token, user: res.data.user}) 
                 }).catch(()=>toast.error("Senha ou Email inválidos"))
        }else{
            toast.error("Insira usuário e senha")
        }
    }

    return(
        <Style.LoginCardContainer>
                <p className="login">Login</p>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Entrar</h2>
                    <div>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <input type="text" placeholder="Email"{...register("email")}/>
                            <input type="password" placeholder="Senha" {...register("password")}/>
                        <div className="createAcount">
                            <p>Não tem uma conta?</p>
                            <p className="createLink" onClick={()=>navegate("/createUser")}>Crie Uma!</p>
                        </div>
                        <button className="nextButton" type="submit">Próximo</button>
                        {(<Style.ErrorMessage>{errors.email?.message || errors.password?.message}</Style.ErrorMessage>)}    
                        </form>
                    </div>
                </div>
            
        </Style.LoginCardContainer>
    )
}

export default LoginCard