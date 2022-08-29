import styled from "styled-components";

export const GameDetailCardContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

.initialCard{
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    width: 40%;
    margin-top: 1rem;
    border-radius: 10px;
    position: relative;

    img{
        width: 20rem;
        margin-right: 1rem;
        border-radius: 5px;
    }

    h2{
        margin-top: 1rem;
    }

    p{
        margin-top: 0.5rem;
    }

    .description{
        margin-top: 2rem;
    }

    .playButton{
        background-color: #329c00;
        text-align: center;
        border-radius: 3px;
        margin-top: 0.2rem;
        color: #ffffff;
        cursor: pointer;
        position: absolute;
        width: 27rem;
        bottom: 2rem;
    }

    .backButton{
        color: blue;
        position: absolute;
        top: 0.2rem;
        right: 1.1rem;
        cursor: pointer;
    }
 }

 .videosCard{
        height: 30rem;
        width: 80%;
        display: flex;
        flex-direction: row;
        background-color: #ffffff60;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        margin-top: 0.5rem;
        font-weight: 500;
        border: 1px solid white;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;
            width: 30rem;
            height: 27rem;
            border-radius: 5px;

            p{
                margin-top: 1rem;
                margin-bottom: 2rem;
            }

        }

    }



`