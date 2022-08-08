import styled, {css} from "styled-components";

interface GenreActiveProps{
    active?:boolean;
}

export const GenreNavigatton = styled.p<GenreActiveProps>`

${({theme})=> css`

    cursor: pointer;
    margin-left: 0.3rem;

    :hover{
        color: ${theme.colors.activeColor};
    }

    ${({active}:any)=> active && css`
        color: ${theme.colors.textSecondaryColor};
        background-color: ${theme.colors.activeColor};

        :hover{
            color:${theme.colors.greyBackground}
        }
    `}
`}
`