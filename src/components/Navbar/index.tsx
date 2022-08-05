import * as Styled from "./style"

const NavBar = () =>{
    return(
        <Styled.GenresNavegationBar>
            <div className="filters">
            <div className="genres">
                <p>Gêneros:</p>
                <Styled.GenreNavigatton active>Todos</Styled.GenreNavigatton>
                <p>Ação</p>
                <p>Aventura</p>
                <p>FPS</p>
            </div>
            <Styled.FavoriteButton active>
                <p>Mostrar Favoritos</p>
            </Styled.FavoriteButton>
            </div>
        </Styled.GenresNavegationBar>
    )};

export default NavBar;
