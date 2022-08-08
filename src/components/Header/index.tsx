import * as Styled from "./style"
import {  GerenUser, AddGame  } from "../../assets/icons"

const Header = () =>{
    return(
        <Styled.HeaderContainer>
            <h1>Microsoft Games</h1>
            <section className="cards">
                <div className="cardOne">
                    <div className="ball">
                        J
                    </div>              
                    <div className="nameEmail">
                        <p className="userName">João Pedro Thuler Lima</p>
                        <p className="email">thuler_lima@hotmail.com</p> 
                        <button>Sair</button>
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