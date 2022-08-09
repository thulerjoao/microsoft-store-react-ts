import * as Styled from "./style"
import {  GerenUser, AddGame  } from "../../assets/icons"
import { useNavigate } from "react-router-dom"

const Header = () =>{
const navegate = useNavigate()

    return(
        <Styled.HeaderContainer>
            <h1>Microsoft Games</h1>
            <img className="logoMicrosoft" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Microsoft_Studios_logo.svg/1200px-Microsoft_Studios_logo.svg.png" alt="logo microsoft" />
            <section className="cards">
                <div className="cardOne">
                    <div className="ball">
                        J
                    </div>              
                    <div className="nameEmail">
                        <p className="userName">João Pedro Thuler Lima</p>
                        <p className="email">thuler_lima@hotmail.com</p> 
                        <button onClick={()=> navegate("/")}>Sair</button>
                    </div>   
                </div>
                <div className="cardTwo">
                    <div className="icons">
                        <GerenUser/>
                        <AddGame/>
                    </div>
                    <div className="line">
                        <p>Gerenciamento de usuário</p>
                        <p>Cadastrar Novo Jogo</p>
                    </div>
                    
                    
                     
                </div>
            </section>
        </Styled.HeaderContainer>
    )
}

export default Header;