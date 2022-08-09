import SettingsCard from "../../components/SettingsCard"
import * as Style from "./style"
import { mockedGames } from "../../mocks"

const Settings = ()  =>{
    return(
        <Style.SettingsContainer>
            <SettingsCard list={mockedGames}/> 
        </Style.SettingsContainer>
    )
}

export default Settings