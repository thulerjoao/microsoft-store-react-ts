import * as Style from "./style"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const LoginCard = ()=> {
    const navegate = useNavigate()

    return(
        <Style.LoginCardContainer>
                <p className="login">Login</p>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Entrar</h2>
                    <div>
                        
                        <input type="text" value="Email" required/>
                        <input type="text" value="Senha" required/>
                        
                        <div className="createAcount">
                            <p>Não tem uma conta?</p>
                            <p className="createLink" onClick={()=> toast.error('Sessão em desenvolvimento')}>Crie Uma!</p>
                        </div>
                        <p className="nextButton" onClick={()=> navegate("/home")}>Próximo</p>
                    </div>
                </div>
            
        </Style.LoginCardContainer>
    )
}

export default LoginCard