import styled,{css} from "styled-components";

interface GenreNavigattonProps{
    active?:boolean;
}

export const GenresNavegationBar = styled.div`
    width: 100%;
    display: flex;
    color: #ffffff;
    margin: 1rem 0;
    height: 4vh;
    p{
        padding:  0.5rem;
    }

    .filters{
        display: flex;
        justify-content: space-between;
        width: 100%;        
        align-items: center;
        padding-left: 1.5rem;

        div{
            display: flex;
        }

    .genres{
        border: 2px solid #C4C5C7;
        background-color: #C4C5C750;
        border-radius: 3px;
    }
}
`

export const GenreNavigatton = styled.p<GenreNavigattonProps>`
    border: 0;
    color: #ffffff;
    cursor: pointer;
    margin: 0 0.3rem;

    :hover{
        color: #329C00;
    }

    ${({active})=> active && css`
        color: C4C5C7;
        background-color: #329C00;
        border-left:2px solid #C4C5C7;
        border-right:2px solid #C4C5C7;

        :hover{
            color:#C4C5C7
        }
    `}

`

export const FavoriteButton = styled.p<GenreNavigattonProps>`
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #C4C5C750;
    margin-right: 9rem;
    border: 2px solid #C4C5C7;
    border-radius: 3px;
    cursor: pointer;

    :hover{
            color:#329C00;
        }
    
    ${({active}) => active && css`
        background-color: #329C00;

        :hover{
            color:#C4C5C7
        }        
    `}
`