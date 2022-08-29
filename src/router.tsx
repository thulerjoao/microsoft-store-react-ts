import { Route, Routes, Navigate } from "react-router-dom"
import { useAuth } from "./contexts/auth"
import CreateProfile from "./Pages/CreateProfile"
import CreateUser from "./Pages/CreateUser"
import EditGame from "./Pages/EditGame"
import EditProfile from "./Pages/EditProfile"
import GameDetail from "./Pages/GameDetail"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import RegisteGame from "./Pages/RegisteGame"
import SelectProfile from "./Pages/SelectProfile"
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
                <Route path="/registeGame" element={<RegisteGame/>}/>
                <Route path="/editProfile" element={<EditProfile/>}/>
                <Route path="/editGame" element={<EditGame/>}/>
                <Route path="/gameDetail" element={ <GameDetail /> }/>
                </>
                :
                <>
                <Route path="/" element={<Login/>}/>
                <Route path="/createUser" element={<CreateUser/>}/>
                <Route path="/createProfile" element={<CreateProfile/>}/>
                <Route path="/selectProfile" element={<SelectProfile/>}/>
                </>
            }
            <Route path="*" element={<Navigate to={logged?"/home":"/"}/>}/>  
        </Routes>
    )
}

export default Router
