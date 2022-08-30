import Header from "../../components/Header"
import GameList from "../../components/GameList"
import * as Styled from "./styles"
import { useState } from "react"
import { Game, Genres } from "../../types"
import { useGames } from "../../contexts/games"
import { useGenres } from "../../contexts/genres"


const Home = () => {

    const { games } = useGames()
    const { genres } = useGenres()
    
    const [favoritClick, setFavoritClick] = useState<boolean>(false) //codigo referente ao buscar favoritos
    const [selectedGenre, setSelectedGenre] = useState<Genres>(genres[0]) //codigo referente ao buscar por genero
    const [search, setSearch] = useState<string>("") //codigo referente ao buscar por nome

    const filterElemts:Game[] = selectedGenre.name==="Todos"?games
            :games.filter((element) => element.genres[0].name===selectedGenre.name) //codigo referente ao buscar por genero

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
                    {genres.map((element, index)=>{ 
                        return(
                            <Styled.GenreNavigatton 
                            key= {index}
                            active={element.name === selectedGenre.name} 
                            onClick={() => {setSelectedGenre(element);console.log(genres)}}>
                                {element.name}
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
