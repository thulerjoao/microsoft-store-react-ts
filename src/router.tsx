import { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Settings from "./Pages/Settings"

const Router = () =>{
    const[logged, setLogged] = useState<boolean>(false)

    return(
        <Routes>
            {
                logged? 
                <>
                <Route path="/home" element={ <Home setLogged={setLogged}/> }/>
                <Route path="/settings" element={ <Settings/> }/>
                </>
                :
                <Route path="/" element={<Login logged={logged} setLogged={setLogged}/>}/>
            }
            <Route path="*" element={<Navigate to={logged?"/home":"/"}/>}/>  
        </Routes>
    )
}

export default Router
