import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/auth"
import { api } from "../../services"
import * as Style from "./style"

const CreateUserCard = () =>{

    const navegate= useNavigate()
    const {login} = useAuth()
  

    const[name, setName] = useState<string>("")
    const[email, setEmail] = useState<string>("")
    const[password, setPassword] = useState<string>("")
    const[confirmPassword, setConfirmPassword] = useState<string>("")
    const[cpf, setCpf] = useState<string>("")


    interface UserData{
        name:string;
        email:string;
        password:string;
        confirmPassword:string,
        cpf:string
        isAdmin: boolean
    }

    const data:UserData={
        name:name,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        cpf:cpf,
        isAdmin:true
    }

    const handleUserPost = ()=>{
        if(password===confirmPassword){
            if(name!=="" && email !=="" && password !=="" && cpf !== ""){
                api.post("/user", data)
                .then((res)=>{api.post("auth", data).then((res)=>{
                    login({token: res.data.token, user: res.data.user})
                });
                toast.success("Usuário cadastrado!")})
                .catch(err=>toast.error("Não foi possível realizar o cadastro"))
            }else{
                toast.error("Erro ao tentar cadastrar")
            }
        }else{
            toast.error("As senhas não conicidem")
        }

    }

    


    return(
        <Style.CreateUserCardContainer>

                <header>
                    <p className="register">Registro de Usuário</p>
                    <p className="comeBack" onClick={()=> navegate("/")}>Voltar</p>
                </header>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Preencha os campos a seguir</h2>
                    <div>
                        <div>
                            <input type="text" placeholder="Nome completo" value={name} onChange={e=>setName(e.target.value)}/>
                            <input type="text" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                            <input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)}/>
                            <input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
                            <input type="text" placeholder="CPF" value={cpf} onChange={e=>setCpf(e.target.value)}/>
                            <button className="registerButton" onClick={()=>handleUserPost()}>Cadastrar</button>
                            {/* {(<Style.ErrorMessage>{errors.email?.message || errors.password?.message}</Style.ErrorMessage>)}     */}
                        </div>
                    </div>
                </div>
            
        </Style.CreateUserCardContainer>
    )
}

export default CreateUserCard