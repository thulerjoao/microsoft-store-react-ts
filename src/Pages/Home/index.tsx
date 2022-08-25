import Header from "../../components/Header"
import GameList from "../../components/GameList"
import * as Styled from "./styles"
import { useState } from "react"
import { mockedGenres } from "../../mocks"
import { Game, Genres } from "../../types"
import { useGames } from "../../contexts/games"


const Home = () => {

    const { games } = useGames()
    
    const [favoritClick, setFavoritClick] = useState<boolean>(false) //codigo referente ao buscar favoritos
    const [selectedGenre, setSelectedGenre] = useState<Genres>(mockedGenres[0]) //codigo referente ao buscar por genero
    const [search, setSearch] = useState<string>("") //codigo referente ao buscar por nome

    const filterElemts:Game[] = selectedGenre.title==="Todos"?games
            :games.filter((element) => element.genreName===selectedGenre.title) //codigo referente ao buscar por genero

    const filteredGames:Game[] = favoritClick===false?(filterElemts)
            :filterElemts.filter((element)=> element.isfavorite===true)
    
    const filteredCards:Game[] = search.length>0? 
            filteredGames.filter(element => element.title.toUpperCase().includes(search.toUpperCase()))
            :filteredGames //codigo referente ao buscar por nome

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
                <div className="searchAndButton">
                    <div className="divSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                        <input 
                        type="text" 
                        placeholder="Buscar por nome"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        />
                    </div>
                    <Styled.FavoriteButton active={favoritClick} 
                        onClick={()=>{setFavoritClick(!favoritClick)}
                    }>Mostrar Favoritos</Styled.FavoriteButton>
                </div>
                </div>
            </Styled.GenresNavegationBar>
            <GameList list={filteredCards}/>
        </Styled.HomeContainer>
    )
}

export default Home
