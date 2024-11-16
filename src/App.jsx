
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
import HostVans from "../Pages/Host/HostVans.jsx"
import HostVanDetail from "../Pages/Host/HostVanDetails.jsx"
import HostVanInfo from "../Pages/Host/HostVanInfo.jsx"
import HostVanPhoto from "../Pages/Host/HostVanPhotos.jsx"
import HostVanPricing from "../Pages/Host/HostVanPricing.jsx"


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
              <Route path="vans" element={<HostVans />} />
              
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
                <Route path="photos" element={<HostVanPhoto/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

