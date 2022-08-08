import Header from "../../components/Header"
import NavBar from "../../components/Navbar"
import GameList from "../../components/GameList"
import * as Styled from "./styles"
import { mockedGames } from "../../mocks"

const Home = () => {
    return(
        <Styled.HomeContainer>
            <Header/>
            <NavBar/>
            <GameList list={mockedGames}/>
        </Styled.HomeContainer>
    )
}

export default Home