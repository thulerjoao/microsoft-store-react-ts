import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { GamesProvider } from "./games";
import { GenresProvider } from "./genres";
import { ProfilesProvider } from "./genres copy"

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GenresProvider>
            <GamesProvider>
            <ProfilesProvider>
              {children}
            </ProfilesProvider>
            </GamesProvider>
          </GenresProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
