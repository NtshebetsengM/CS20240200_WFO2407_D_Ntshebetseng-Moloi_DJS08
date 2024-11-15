import Header from "./Header.jsx"
import Footer from "../components/Footer.jsx"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
}