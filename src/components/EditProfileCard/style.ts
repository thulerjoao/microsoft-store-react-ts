import styled from "styled-components";

export const EditUserCardContainer = styled.div`
    width: 37.125rem;
    height: 41.625rem;
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

.logo{
    width: 155px;
    height: 80px;
    margin-left: 2rem;
    margin-top: 1rem;
}

.profilePicture{
    width: 10.688rem;
    height: 9.875rem;
    margin: 2.5rem 13.2185rem;
    border: 1px dashed black;
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

.buttons{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    
}

.registerButton{
    width: 212px;
    height: 40px;
    color: white;
    background-color: #7FBA00;
    font-size: 20px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 3rem 1rem;
}

.deleteButton{
    width: 212px;
    height: 40px;
    color: white;
    background-color: #F25022;
    font-size: 20px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 3rem 1rem;
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