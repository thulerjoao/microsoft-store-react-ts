import Router from "./router"
import './App.css'
import { Toaster } from "react-hot-toast"

const App = () =>{

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false}/>
      < Router />
    </div>
  )
}

export default App