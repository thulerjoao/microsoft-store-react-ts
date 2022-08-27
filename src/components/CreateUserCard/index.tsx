import { useNavigate } from "react-router-dom"
import * as Style from "./style"

const CreateUserCard = () =>{

    const navegate= useNavigate()

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
                        <form>
                        <input type="text" placeholder="Nome completo"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Confirmar senha"/>
                        <input type="text" placeholder="CPF"/>
                        <button className="registerButton" type="submit">Cadastrar</button>
                        {/* {(<Style.ErrorMessage>{errors.email?.message || errors.password?.message}</Style.ErrorMessage>)}     */}
                        </form>
                    </div>
                </div>
            
        </Style.CreateUserCardContainer>
    )
}

export default CreateUserCard