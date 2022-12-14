import { Game } from "../../types"
import GameCard from "../GameCard/index"
import * as Styled from "./style"


interface GameListProps {
    list: Game[]
}

const GameList = ({ list }:GameListProps)=>{
    return(
        
        <Styled.GamesList>
            <p className="titleList">Lista os Jogos</p>
            <div>
            {list.map((element)=>
            <GameCard game={element} key={element.id}/>
            )}
            </div>
        </Styled.GamesList>
    )}

export default GameList