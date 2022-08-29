import * as Styled from "./styles"
import GameDetailCard from "../../components/GameDetail"
import { Game } from "../../types"


const GameDetail = () => {
    
    return(
        <Styled.GameDetailContainer>
            <GameDetailCard/>
        </Styled.GameDetailContainer>
    )
}

export default GameDetail
