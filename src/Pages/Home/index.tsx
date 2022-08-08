import Header from "../../components/Header"
import NavBar from "../../components/NavBar"
import GameList from "../../components/GameList"
import * as Styled from "./styles"
import { mockedGames } from "../../mocks"
import { useState } from "react"
import { mockedGenres } from "../../mocks"
import { Game, Genres } from "../../types"


const Home = () => {
    
    const [selectedGenre, setSelectedGenre] = useState<Genres>(mockedGenres[0])

    const filteredGames:Game[] = selectedGenre.title==="Todos"? mockedGames: mockedGames.filter((element) => element.genreName===selectedGenre.title)
    

    return(
        <Styled.HomeContainer>
            <Header/>
            <NavBar list={mockedGenres}/>
            <GameList list={filteredGames}/>
        </Styled.HomeContainer>
    )
}

export default Home