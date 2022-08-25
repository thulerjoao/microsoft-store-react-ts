import { ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "../assets/styles/theme"
import { AuthProvider } from "./auth"
import { GamesProvider } from "./games"

interface ProviderProps{
    children: ReactNode
}

const Providers = ({ children }:ProviderProps)=>{
    return(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GamesProvider>
              {children}
          </GamesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
    )
}

export default Providers