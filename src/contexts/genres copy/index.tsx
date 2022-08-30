import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../services";
import { Profile } from "../../types";
import { useAuth } from "../auth";

interface ProfileProviderData {
  children: ReactNode;
}

interface ProfileContextData {
  profiles: Profile[];
}

const ProfileContext = createContext<ProfileContextData>({} as ProfileContextData);

export const ProfilesProvider = ({ children }: ProfileProviderData) => {
  const { logged } = useAuth();
  const [profiles, setProfiles] = useState([]);

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleGetProfile = () => {
    api.get("/profile", headers).then((res) => {setProfiles(res.data)});
  };

  useEffect(() => {
    {handleGetProfile()};
  }, [logged]);

  return (
    <ProfileContext.Provider value={{ profiles }}>{children}</ProfileContext.Provider>
  );
};

export const useProfiles = () => useContext(ProfileContext);
