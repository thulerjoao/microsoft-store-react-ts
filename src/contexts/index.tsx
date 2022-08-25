import { ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "../assets/styles/theme"
import { AuthProvider } from "./auth"
import { GamesProvider } from "./games"
import { GenresProvider } from "./genres"

interface ProviderProps{
    children: ReactNode
}

const Providers = ({ children }:ProviderProps)=>{
    return(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GenresProvider>
          <GamesProvider>
              {children}
          </GamesProvider>
          </GenresProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
    )
}

export default Providers