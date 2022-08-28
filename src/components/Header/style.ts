import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`

${({theme})=> css`


    display: flex;
    flex-direction: column;
    text-align: center;
    width: 95%;
    height: 10rem;
    padding: 0 1.5rem;
    padding-bottom: 10.5rem ;
    box-sizing: border-box;
    align-items: center ;


    h1{
        margin: .8rem;
        display: none;
    }

    .logoMicrosoft{
        width: 15rem;
        align-items: center;
        margin-top: 3rem ;

    }

    .cards{
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: -9rem;
    }


    //css para cardOne

    .cardOne{
        display: flex;
        align-items: center;
        background-color: ${theme.colors.backgoundCards};
        border-radius: 10px;
        padding: 0.2rem 1rem;
        padding-right: 5rem;
    }

    .ball{
        background-color: ${theme.colors.greyBackground};
        margin: 1rem 1rem 1rem 0.2rem;
        padding: 0.8rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        font-weight: 900;
        font-size: 1.3rem;
        align-items: center;
    }

    .nameEmail{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .userName{
        font-size: 1rem;
        margin-bottom: 0.1rem;
    }

    .email{
        font-size: 0.8rem;
    }

    button{
        color: blue;
        border: none;
        text-decoration: none;
        background-color: ${theme.colors.backgoundCards};
        font-weight: 500;
        margin-left: 0.5rem;
        cursor: pointer;
    }

    //css para cardTwo

    .cardTwo{
        display: flex;
        background-color: ${theme.colors.backgoundCards};
        border-radius: 10px;
        padding: 0.2rem 1rem;
        padding-right: 3rem;
    }

    .icons{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .line{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.9rem;
        
    }

    p{
        margin: 0.4rem;
        font-weight: 500;
        cursor: pointer;
    };
    
`}

`