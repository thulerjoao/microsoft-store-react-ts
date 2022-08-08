import { Genres } from "../../types";
import * as Styled from "./style"
import GenreCard from "../GenreCard"

interface GenreListProps {
    list: Genres[]
}

const NavBar = ({ list }:GenreListProps) =>{
    return(
        <Styled.GenresNavegationBar>
          <div className="filters">
            <div className="genres">
                <p>Gêneros:</p>
                {list.map((element, index)=>
                <GenreCard genre={element} key={index}/>
            )}
            </div>
            <Styled.FavoriteButton active>Mostrar Favoritos</Styled.FavoriteButton>
            </div>
        </Styled.GenresNavegationBar>
    )};

export default NavBar;