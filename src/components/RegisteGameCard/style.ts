import styled from "styled-components";

export const RegisteGameCardContainer = styled.div`
    width: 48.95rem;
    height: 87%;
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
    margin: 0.8rem 2.3rem;
    padding-left: 1.2rem;
    padding-bottom: 0.4rem;
    width: 98%;
    text-decoration: none;
}

.topPhrase{
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
    margin-top: 0rem;
}

h2{
    font-size: 25px;
    font-weight: 400;
    margin-left: 2.2rem; 
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
form{
    margin: 0 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.chooseAndChangeGenre{
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;

    p{
        margin: 0 2rem ;
    }
    
}

select{
    height: 1.5rem;
}

.descritionAndImage{
    display: flex;
    align-items: center;
    margin: 1rem 0;

    img{
        height: 10rem;
        width: 15rem;
        border: 1px dashed black;
    }

    .imgInput{
    width: 40%;
}


}
textarea{
    font-size: 1rem;
    width: 90%;
    height: 8rem;
    margin-bottom: 1rem;
    border: none;
    background-color: #D9D9D9;
    padding: 1rem;
    box-sizing: border-box;
    resize: none;
    
    :focus{
        border: none;
        outline:none 
    }
}


button{
    width: 212px;
    min-height: 40px;
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
    margin: 1rem 0 0 33.2rem    
}

.description{
    display: flex;
    align-items: center;
    margin-top: 1rem;
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