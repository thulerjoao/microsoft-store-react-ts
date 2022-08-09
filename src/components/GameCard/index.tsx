import { Game } from "../../types"
import * as Styled from "./style"
import toast from "react-hot-toast"

interface GameCardProps{
    game:Game
}

const GameCard = ({game}:GameCardProps)=>{
    return (
    <Styled.GameListContainer>
        <img src={game.coverImageUrl} alt={game.title} />
        <div>
            <h3>{game.title}</h3>
            <p>{game.genreName}</p>
            <p>+ {game.imdbScore.toFixed(1)}</p>
            <p className="playButton" onClick={()=> toast.error('Sessão em desenvolvimento')}>JOGAR</p>
        </div>
    </Styled.GameListContainer>)
}

export default GameCard


