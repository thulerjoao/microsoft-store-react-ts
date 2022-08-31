import { Game } from "../../types"
import * as Styled from "./style"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface GameCardProps{
    game:Game
}

    const GameCard = ({game}:GameCardProps)=>{
    const[isFavorite,setIsFavorite] = useState<boolean>(false)

    const handleFavorite = (game:Game) =>{
        setIsFavorite(!isFavorite);    
    }

    const navegate = useNavigate()
    const handleCurrentGame = () =>{
        localStorage.setItem("currentGame", JSON.stringify(game))
        navegate("/gameDetail")
    }

    return (
    <Styled.GameListContainer onClick={()=>{handleCurrentGame()}}>
        <img src={game.coverImageUrl} alt={game.title} className="gameImage"/>
        <div className="cardInfos">
            <h3 className="gameTitle">{game.title}</h3>
            <p className="gameText">{game.genres[0].name}</p>
            <p className="gameText">★ {game.imdbScore.toFixed(1)}</p>
            <p className="playButton" onClick={(event)=>{event.stopPropagation();;toast.error('Seu dispositivo não atende os requisitos')}}>JOGAR</p>
            <Styled.favoriteClick active={isFavorite} onClick={(event)=>{
                handleFavorite(game);
                event.stopPropagation();
                }}>Favorito</Styled.favoriteClick>
        </div>
    </Styled.GameListContainer>)
}

export default GameCard


