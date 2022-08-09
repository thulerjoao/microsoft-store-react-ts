import styled, { css } from "styled-components";

export const GamesList = styled.main`

${({theme})=> css`

        width: 95%;
        margin: 1rem 0;
        padding-top: 1rem;
        background-color: ${theme.colors.opacityGreyBackground};
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid ${theme.colors.borderColor};
        overflow-y: scroll;
        align-items: center;
        position: relative;

        .titleList{
            color: ${theme.colors.textSecondaryColor};
            font-size: 2.25rem;
            margin-left: 2rem;
            text-shadow: 2px 2px 10px black;
            font-weight: 500;
            position: absolute;
            text-align: center;
            top: 1.5rem;    
        }

        div{
            display: flex;
            flex-wrap:wrap;
            justify-content: space-around;
            margin-top: 3.2rem ;
        }
`}
`

