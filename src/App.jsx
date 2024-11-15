
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../Pages/About.jsx"
import Home from "../Pages/Home.jsx"
import VanDetail from "../Pages/Vans/VanDetail.jsx"
import Vans from "../Pages/Vans/Vans.jsx"
import Layout from "../components/Layout.jsx"
import Dashboard from "../Pages/Host/Dashboard.jsx"
import Income from "../Pages/Host/Income.jsx"
import Reviews from "../Pages/Host/Reviews.jsx"
import HostLayout from "../components/HostLayout.jsx"



export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element = {<About/>} />
            <Route path="vans" element = {<Vans/>} />
            <Route path="vans/:id" element={<VanDetail/>} />

            <Route path="host" element={<HostLayout/>} >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

