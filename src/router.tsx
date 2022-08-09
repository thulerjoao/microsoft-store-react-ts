import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Settings from "./Pages/Settings"

const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={ <Home/> }/>
            <Route path="/settings" element={ <Settings/> }/>
        </Routes>
    )
}

export default Router
