import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import { api } from "../../services/index"

interface AuthProviderProps{
    children: ReactNode
}

interface loginParams{
    token:string,
    user:User
}

interface AuthProviderData{
    logged:boolean,
    login: (param:loginParams)=> void,
    logout: ()=> void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)


export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const navegate = useNavigate();
    const [logged, setLogged] = useState<boolean>(false);

    const checkTokenExpiration = ()=>{
        const user = JSON.parse(localStorage.getItem("user") || "")
        const token = localStorage.getItem("token")

        const heardes = {
            headers: {
                Authorization:`Bearer ${token}`
            }
        }

        
        api.get(`/user/${user.id}`,
        heardes).then(()=>{
            setLogged(true);
            navegate("/home")
        }).catch(()=>{
            logout();
            toast.error("Login necessário")
        })
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token) checkTokenExpiration();
    } , [])

    const login = ({token, user}:loginParams) =>{
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setLogged(true);
        navegate("/home");
        toast.success("login bem sucedido")
    }

    const logout = () =>{
        localStorage.clear();
        setLogged(false);  
        navegate("/");
    }

    return <AuthContext.Provider value={{logged, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)