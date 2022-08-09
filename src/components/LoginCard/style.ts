import styled from "styled-components";

export const LoginCardContainer = styled.div`
    width: 594px;
    height: 666px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

div{
    display: flex;
    flex-direction: column;
}

input{
    all: unset;
    border-bottom: 2px solid #0085FF;
    font-size: 16px;
    color: #AEA9A9;
    margin: 1rem 2.3rem;
    padding-left: 1.2rem;
    padding-bottom: 0.4rem;
}

.login{
    width: 100%;
    height: 44px;
    background-color: #F3F3F3;
    color: #808080;
    padding-left: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 10px 10px 0 0;
}

img{
    width: 155px;
    height: 80px;
    margin-left: 2rem;
    margin-top: 1rem;
}

h2{
    font-size: 32px;
    font-weight: 400;
    margin: 2.2rem 0;
    margin-left: 2.2rem; 
}

.createAcount{
    display: flex;
    flex-direction: row;
    font-size: 16px;
    margin-top: -0.5rem ;
    margin-left: 3.2rem;

    p{
        margin-left: 0.3rem;
    }

    .createLink{
        color: #0085FF;
        cursor: pointer;
    }
}

.nextButton{
    width: 212px;
    height: 40px;
    color: white;
    background-color: #0085FF;
    font-size: 20px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 7rem;
    margin-left: 20rem;
}

`