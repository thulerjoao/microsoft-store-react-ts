import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 95%;
    height: 10rem;
    padding: 0 1.5rem;
    padding-bottom: 10.5rem ;
    box-sizing: border-box;
    


    h1{
        margin: .8rem;
    }

    .cards{
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    //css para cardOne

    .cardOne{
        display: flex;
        align-items: center;
        background-color: #D8D8DC;
        border-radius: 10px;
        padding: 0.2rem 1rem;
        padding-right: 5rem;
    }

    .ball{
        background-color: #C4C4C7;
        margin: 1rem 1rem 1rem 0.2rem;
        padding: 0.8rem;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 25px;
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
        background-color: #D8D8DC;
        font-weight: 500;
        margin-top: 0.3rem;
        cursor: pointer;
    }

    //css para cardTwo

    .cardTwo{
        display: flex;
        background-color: #D8D8DC;
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

    p, img{
        margin: 0.2rem;
        font-weight: 500;
    };
    


`