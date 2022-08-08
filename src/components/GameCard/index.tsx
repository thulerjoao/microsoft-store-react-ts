import { Game } from "../../types"
import * as Styled from "./style"

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
            <p className="playButton">JOGAR</p>
        </div>
    </Styled.GameListContainer>)
}

export default GameCard

function toFixed(imdbScore: number, arg1: number): import("react").ReactNode {
    throw new Error("Function not implemented.")
}
