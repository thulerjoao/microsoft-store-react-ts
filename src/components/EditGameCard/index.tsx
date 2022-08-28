import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGenres } from "../../contexts/genres"
import * as Style from "./style"


const EditGameCard = () =>{

    const navegate= useNavigate()
    const {genres}= useGenres()

    const [gameImg, setGameImg] = useState<string>("https://t.ctcdn.com.br/_ALSW0x5t7hbdO7pVxYqXW84Auc=/512x288/smart/filters:format(webp)/i570476.png")
    if(gameImg==="") setGameImg("https://t.ctcdn.com.br/_ALSW0x5t7hbdO7pVxYqXW84Auc=/512x288/smart/filters:format(webp)/i570476.png")

    return(
        <Style.EditGameCardContainer>

                <header>
                    <p className="topPhrase">Cadastro</p>
                    <p className="comeBack" onClick={()=> navegate("/settings")}>Voltar</p>
                </header>
                <div>
                    <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Microsoft-Logo.png" />
                    <h2>Jogos</h2>
                    <div className="descritionAndImage">
                        <img src={gameImg} alt="Imagem do jogo" />
                        <input className="imgInput"type="text" placeholder="URL da imagem do jogo" onChange={e=>setGameImg(e.target.value)}/>
                    </div>

                    <form>
                        <div>
                            <input type="text" placeholder="Nome do jogo"/>
                            <input type="text" placeholder="IMBD Score [1-5]"/>
                            <input type="text" placeholder="Ano de lançamento"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Trailer URL"/>
                            <input type="text" placeholder="Gameplay URL"/>
                            <div className="chooseAndChangeGenre">
                                <p>Gênero</p>
                                <select >
                                    {genres.map((element)=><option key={element.id}>{element.name}</option>)}
                                </select>
                            </div>                   
                        </div>
                    </form>
                    <div className="description">
                        <textarea  placeholder="Descrição..." id="msg" name="msg"></textarea>   
                    </div>  
                <div className="buttons">
                    <button className="registerButton" type="submit">Atualizar</button>
                    <button className="deleteButton" type="submit">Excluir</button>
                </div>
                </div>
            
        </Style.EditGameCardContainer>
    )
}

export default EditGameCard