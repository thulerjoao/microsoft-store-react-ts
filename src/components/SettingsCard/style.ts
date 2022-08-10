import styled from "styled-components";

export const SettingsCardContainer = styled.div`
    width: 1083px;
    height: 880px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    .imageMicrosoft{
    width: 155px;
    height: 80px;
    margin-left: 2rem;
    margin-top: 0.5rem;
    }

h2{
    font-size: 32px;
    font-weight: 400;
    margin: 0.5rem 0;
    margin-left: 2.2rem; 
}

.cardList{
    width: 95%;
    margin-left: 2.5%;
    margin-bottom: 2rem;
    height: 25rem;
    display: flex;
    border: 1px solid black;
    align-items: center;
    box-sizing: border-box;
    
}

.plusCard{
    min-width: 230px;
    height: 20rem;
    border: 1px solid black;
    border-style: dotted;
    margin: 1rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    background-color: #7FBA0040;
}

.cardMapped{
    display: flex;
    overflow-x: scroll;
    text-align: center;
    height: 25rem;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    box-sizing: border-box;
    background-color: #F1F1F1;
    
}

.eachCard{
    margin: 0 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
}

.cardImage{
    width: 230px;
    height: 20rem;
}

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

.settings{
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


.confirmButtons{
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
    
}

.button{
    width: 106px;
    height: 40px;
    color: white;
    font-size: 20px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 2rem;    
}
.save{
    background-color: #7FBA00;
}

.cancel{
    background-color: #F25022;
}

//css para parte de edição dos generos

.registerGenre{
    display: flex;
    flex-direction: column;
    align-items: center;
}

input{
    all: unset;
    border-bottom: 2px solid #0085FF;
    font-size: 16px;
    color: #AEA9A9;
    margin: 1rem 2.3rem;
    padding-bottom: 0.4rem;
}

.chooseAndChangeGenre{
    display: flex;
    align-items: center;
}

select{
    height: 1.5rem;
}

.genresContainer{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 1.5rem;
}

.editGenres{
    width: 50%;
    flex-direction: column;
    display: flex;
    align-items: center;
    
}

.butonsEditGenre{
    display: flex;
    margin-top: 1rem;
}

`