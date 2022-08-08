import styled,{css} from "styled-components";

interface GenreActiveProps{
    active?:boolean;
}


export const GenresNavegationBar = styled.div`

${({theme})=> css`


    width: 100%;
    display: flex;
    color: ${theme.colors.textPrimaryColor};
    margin: 1rem 0;
    height: 4vh;
    width: 95%;

    p{
        padding:  0.5rem;
    }

    .searchAndButton{
        width: 25rem;
        align-items: center;
        display: flex;
        justify-content: space-around;
        display: flex;
        flex-wrap: wrap;
    }

    .divSearch{
        align-items: center;
        background-color: ${theme.colors.greyBackground};
        padding-left: 0.5rem;
        box-sizing: border-box;
        border: 1px solid ${theme.colors.borderColor};
        border-radius: 3px;
        color:${theme.colors.textPrimaryColor};
    }

    input{
        all: unset;
        box-sizing: border-box;
        padding: 0 1rem;
        color:${theme.colors.textPrimaryColor};
        background-color: ${theme.colors.greyBackground};
        width: 10.5rem;
        height: 4vh;
        
           }

    .filters{
        
        display: flex;
        justify-content: space-between;
        width: 100%;        
        align-items: center;
        padding: 0 1.5rem;

        div{
            display: flex;
        }

    .genres{
        border: 1px solid ${theme.colors.borderColor};
        background-color: ${theme.colors.backgoundCards};
        border-radius: 3px;
        box-sizing: border-box;
        align-items: center;
    }
}
`}
`

export const FavoriteButton = styled.p<GenreActiveProps>`

${({theme})=> css`

    font-size: 1.2rem;
    font-weight: 500;
    background-color: ${theme.colors.backgoundCards};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 3px;
    cursor: pointer;

    :hover{
            color:${theme.colors.activeColor};
        }
    
    ${({active}:any) => active && css`
        background-color: ${theme.colors.activeColor};
        color: ${theme.colors.textSecondaryColor};

        :hover{
            color:${theme.colors.greyBackground}
        }        
    `}
`}
`