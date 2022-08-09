import Header from "../../components/Header"
import GameList from "../../components/GameList"
import * as Styled from "./styles"
import { mockedGames } from "../../mocks"
import { useState } from "react"
import { mockedGenres } from "../../mocks"
import { Game, Genres } from "../../types"


const Home = () => {
    
    const [favoritClick, setFavoritClick] = useState<boolean>(false)
    const [selectedGenre, setSelectedGenre] = useState<Genres>(mockedGenres[0])

    const filterElemts = selectedGenre.title==="Todos"? 
    mockedGames:mockedGames.filter((element) => element.genreName===selectedGenre.title)

    const filteredGames:Game[] = favoritClick===false?(filterElemts):
            filterElemts.filter((element)=> element.isfavorite===true)
    

    return(
        <Styled.HomeContainer>
            <Header/>
            <Styled.GenresNavegationBar>
                <div className="filters">
                <div className="genres">
                    <p>Gêneros:</p>
                    {mockedGenres.map((element)=>{
                        return(
                            <Styled.GenreNavigatton 
                            active={element.title === selectedGenre.title} 
                            onClick={() => setSelectedGenre(element)}>
                                {element.title}
                            </Styled.GenreNavigatton>
                        )
                    })}
                </div>
                    <Styled.FavoriteButton active={favoritClick} onClick={()=>{
                        favoritClick===true?setFavoritClick(false):setFavoritClick(true)
                    }}>Mostrar Favoritos</Styled.FavoriteButton>
                </div>
            </Styled.GenresNavegationBar>
            <GameList list={filteredGames}/>
        </Styled.HomeContainer>
    )
}

export default Home
