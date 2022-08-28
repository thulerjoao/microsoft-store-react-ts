import styled, { css } from "styled-components";

export const GameListContainer = styled.div`

${({ theme })=> css`


    min-width: 260px;
    height: 480px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.backgoundCards};
    align-items: center;
    margin: 1rem;
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    .gameCardDiv{
    background-color: white;
    }

    .gameImage{
        height: 320px;
        width: 228px;
        border-radius: 5px; 
        position: absolute;
        top:0.9rem;
    }

   .cardInfos{
        width: 260px;
        padding: 0 1.5rem;
        box-sizing: border-box;
        position: absolute;
        top: 18.5rem;
        bottom: 0.9rem;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
    }

    .gameText, .gameTitle{
        
        color: black;
        font-size: 1rem;
    }

    .playButton{
        background-color: ${theme.colors.activeColor};
        text-align: center;
        border-radius: 3px;
        margin-top: 0.2rem;
        color: #ffffff;
        cursor: pointer;
    }


`}   
`
