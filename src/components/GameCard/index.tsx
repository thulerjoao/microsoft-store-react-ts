import { Game } from "../../types"
import * as Styled from "./style"
import toast from "react-hot-toast"

interface GameCardProps{
    game:Game
}

const GameCard = ({game}:GameCardProps)=>{
    return (
    <Styled.GameListContainer >
        <img src={game.coverImageUrl} alt={game.title} className="gameImage"/>
        <div className="cardInfos">
            <h3 className="gameTitle">{game.title}</h3>
            <p className="gameText">{game.genreName}</p>
            <p className="gameText">+ {game.imdbScore.toFixed(1)}</p>
            <p className="playButton" onClick={()=> toast.error('Sessão em desenvolvimento')}>JOGAR</p>
        </div>
    </Styled.GameListContainer>)
}

export default GameCard


