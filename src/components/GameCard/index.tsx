import { Game } from "../../types"
import * as Styled from "./style"
import toast from "react-hot-toast"

interface GameCardProps{
    game:Game
}

const GameCard = ({game}:GameCardProps)=>{
    return (
    <Styled.GameListContainer onClick={()=>{}}>
        <img src={game.coverImageUrl} alt={game.title} className="gameImage"/>
        <div className="cardInfos">
            <h3 className="gameTitle">{game.title}</h3>
            <p className="gameText">{game.genres[0].name}</p>
            <p className="gameText">+ {game.imdbScore.toFixed(1)}</p>
            <p className="playButton" onClick={()=> toast.error('Seu dispositivo não atende os requisitos')}>JOGAR</p>
        </div>
    </Styled.GameListContainer>)
}

export default GameCard


