
import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/Home/Home"
import Contact from "./components/pages/Contact/Contact"
import NotFound from "./components/pages/NotFound/NotFound"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App