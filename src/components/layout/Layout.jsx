import { Outlet } from "react-router-dom"
import BarraNav from "../common/BarraNav/BarraNav"
import BarraNews from "../common/BarraNews/BarraNews"
import NavBar from "../pages/navbar/NavBar"
import Footer from "../pages/footer/Footer"
import FooterB from "../pages/FooterB/FooterB"
//import ImgCenter from "../common/imgCenter/ImgCenter"

const Layout = () => {
  return (
    <div>
        <BarraNews/>
        <NavBar/>
        <BarraNav/>
        <Outlet/>
        <Footer/>
        <FooterB/>
    </div>
  )
}

export default Layout;