import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Homepage from "./pages/Homepage"
import Task from "./pages/Task"
import Projects from "./pages/Projects"
import Itinerary from "./pages/Itinerary"
import Settings from "./pages/Settings"
import Archive from "./pages/Archive"
import NotFound from "./pages/NotFound"


function Logout(){
  return <Link to="/Login"/>
}

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/Register" element={<Register/>}/>
        <Route path ="/Homepage" element={<Homepage/>}/>
        <Route path ="/Task" element={<Task/>}/>
        <Route path ="/Projects" element={<Projects/>}/>
        <Route path ="/Itinerary" element={<Itinerary/>}/>
        <Route path ="/Settings" element={<Settings/>}/>
        <Route path ="/Archive" element={<Archive/>}/>
        <Route path ="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
