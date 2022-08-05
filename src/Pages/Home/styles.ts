import styled from "styled-components";
import backgroundHome from "../../assets/images/backgroundHome.jpg"; 

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundHome});
    align-items: center;
    
    
    h1{
        color: #ffffff;
        text-shadow: 2px 2px 10px black;
    }

    
`