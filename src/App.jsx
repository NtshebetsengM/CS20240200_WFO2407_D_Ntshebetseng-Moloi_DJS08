
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import About from "../Pages/About.jsx"
import Home from "../Pages/Home.jsx"
import Header from "../components/Header.jsx"

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element = {<About/>} />
        </Routes>
    </BrowserRouter>
  )
}

