import * as Style from "./style"
import LoginCard from "../../components/LoginCard"
import { Dispatch, SetStateAction } from "react";

interface LoginProps{
    logged:boolean;
    setLogged:Dispatch<SetStateAction<boolean>>
}

const Login = ({logged, setLogged}:LoginProps)  =>{
    return(
        <Style.LoginContainer>
            <LoginCard logged={logged} setLogged={setLogged}/> 
        </Style.LoginContainer>
    )
}

export default Login