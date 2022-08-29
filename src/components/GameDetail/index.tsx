import * as Styled from "./style"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const GameDetailCard = () =>{
const navegate = useNavigate()

const game = JSON.parse(localStorage.getItem("currentGame") || "")

    return(
        <Styled.GameDetailCardContainer>
            <div className="initialCard">
                <img src={game.coverImageUrl} alt="imagem do jogo" />
                <div>
                    <h2>{game.title}</h2>
                    <p className="year">{game.year}</p>
                    <p className="score">{`★ ${game.imdbScore}`}</p>
                    <p className="genre">{game.genres[0].name}</p>
                    <p className="description">{game.description}</p>
                    <p className="playButton" onClick={()=> toast.error('Seu dispositivo não atende os requisitos')}>JOGAR</p>
                    <p className="backButton" onClick={()=>navegate("/home")}>Voltar</p>
                </div>
            </div>
            <div className="videosCard">
                <div>
                    <p>Confira o trailer!</p>
                    <iframe width="420" height="315"
                        src={game.trailerYoutubeUrl}>
                    </iframe>
                </div>
                <div>
                    <p>Confira a gameplay!</p>
                    <iframe width="420" height="315"
                        src={game.gameplayYoutubeUrl}>
                    </iframe> 
                </div> 
            </div>
        </Styled.GameDetailCardContainer>
    )
}

export default GameDetailCard;
