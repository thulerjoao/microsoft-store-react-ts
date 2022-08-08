import * as Styled from "./style"
import { Genres } from "../../types"

interface GenreCardProps{
    genre:Genres
}

const GenreCard = ({genre}:GenreCardProps)=>{
    return(
        <Styled.GenreNavigatton>
            {genre.title}
        </Styled.GenreNavigatton>
    )
}

export default GenreCard