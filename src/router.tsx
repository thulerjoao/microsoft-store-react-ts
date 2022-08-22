import { Route, Routes, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/auth"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Settings from "./Pages/Settings"

const Router = () =>{

    const { logged } = useAuth()

    return(
        <Routes>
            {
                logged? 
                <>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/settings" element={ <Settings/> }/>
                </>
                :
                <Route path="/" element={<Login/>}/>
            }
            <Route path="*" element={<Navigate to={logged?"/home":"/"}/>}/>  
        </Routes>
    )
}

export default Router
