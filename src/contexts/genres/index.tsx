import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../services";
import { Genres } from "../../types";
import { useAuth } from "../auth";

interface GenreProviderData {
  children: ReactNode;
}

interface GenreContextData {
  genres: Genres[];
}

const GenreContext = createContext<GenreContextData>({} as GenreContextData);

export const GenresProvider = ({ children }: GenreProviderData) => {
  const { logged } = useAuth();
  const [genres, setGenres] = useState([]);

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleGetGenre = () => {
    api.get("/genre", headers).then((res) => setGenres(res.data));
  };

  useEffect(() => {
    {handleGetGenre(); console.log(genres)};
  }, [logged]);

  return (
    <GenreContext.Provider value={{ genres }}>{children}</GenreContext.Provider>
  );
};

export const useGenres = () => useContext(GenreContext);
