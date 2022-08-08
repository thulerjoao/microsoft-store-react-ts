import * as Styled from "./style"

interface GenreNavigattonProps{
    active?:boolean;
}

const NavBar = () =>{
    return(
        <Styled.GenresNavegationBar>
            <div className="filters">
            <div className="genres">
                <p>Gêneros:</p>
                <Styled.GenreNavigatton active >Todos</Styled.GenreNavigatton>
                <Styled.GenreNavigatton>Ação</Styled.GenreNavigatton>
                <Styled.GenreNavigatton>Aventura</Styled.GenreNavigatton>
                <Styled.GenreNavigatton>FPS</Styled.GenreNavigatton>
            </div>
            <Styled.FavoriteButton>Mostrar Favoritos</Styled.FavoriteButton>
            </div>
        </Styled.GenresNavegationBar>
    )};

export default NavBar;