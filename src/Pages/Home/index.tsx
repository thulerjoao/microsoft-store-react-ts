import Header from "../../components/Header"
import NavBar from "../../components/Navbar"
import ProductList from "../../components/ProductList"
import * as Styled from "./styles"

const Home = () => {
    return(
        <Styled.HomeContainer>
            <Header/>
            <NavBar/>
            <ProductList/>
        </Styled.HomeContainer>
    )
}

export default Home