import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import { api } from "../../services";
import { Game } from "../../types";
import { useAuth } from "../auth";

interface GamesProviderProps {
    children: ReactNode
}

interface GamesProviderData{
    games: Game[]
}

const GameContext = createContext<GamesProviderData>({} as GamesProviderData);

export const GamesProvider = ({children}:GamesProviderProps) => {

    const { logged } = useAuth();

    const token = localStorage.getItem("token")

    const heardes = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }

    const [games, setGames]= useState<Game[]>([]);

    const handleGetGame = ()=>{
        api.get("/game", heardes).then(res=> {setGames(res.data)})
    }

    useEffect(()=>{if(logged) handleGetGame()},[logged])

    return <GameContext.Provider value={{games}}>{children}</GameContext.Provider>
}

export const useGames = () => useContext(GameContext)