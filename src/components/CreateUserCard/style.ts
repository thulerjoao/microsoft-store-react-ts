import styled from "styled-components";

export const CreateUserCardContainer = styled.div`
    width: 594px;
    height: 666px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
    border-radius: 10px 10px 0 0;
    background-color: #F3F3F3;
    box-sizing: border-box;
}

.comeBack{
    cursor:pointer;
    font-size: 1.2rem;
    color: #0085FF;
    border-radius: 10px 10px 0 0;
}


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
    width: 83%;
    text-decoration: none;
}

.register{
    width: 100%;
    min-height: 44px;
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
    font-size: 25px;
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

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.registerButton{
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
    text-decoration: none;
    border: none;
    margin: 2rem;
}
`

export const ErrorMessage = styled.p`
    color: red;
    align-self: center;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
`