import styled, { css } from "styled-components";

export const CreateUserCardContainer = styled.div`
    width: 594px;
    height: 666px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    position:relative;

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

.entrar{
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

h2{
    font-size: 25px;
    font-weight: 400;
    margin: 2.2rem 0;
    margin-left: 2.8rem; 
}

.titlePhase{
    margin-left: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    
}

.profileCard{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 2.5rem;
    cursor: pointer;
    height: 76px;
    max-width: 594px;
    border-top: 1px dashed lightblue;

    p{
        font-weight: 600;
        margin-left: 1rem;
    }
    
    :hover{
        background-color: #99c9ed;
    }
}

.newProfileCard{
    position: absolute;
    bottom: 165px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 2.5rem;
    cursor: pointer;
    height: 76px;
    max-width: 594px;
    font-weight:500;
    background-color: #D9D9D9;

    p{
        margin-right: 6.2rem;
    }

    :hover{
        background-color: #99c9ed;
    }

}

img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.logo{
    width: 50px;
    height: 45px;
    margin-left: 2rem;
    margin-top: 1rem;
    border-radius: 0;
}

.logOutCard{
    position: absolute;
    bottom: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 0.1rem;

    .p01{
        font-weight: 600;
        margin-top: 1rem;
        margin-left: 1rem;
        
    }
    .p02{
        color: #a9a9a9;
        margin-left: 1rem;
    }
}


.config{
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 3rem;

    :hover{
        transform: scale(1.1);
    }
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