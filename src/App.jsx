import './App.css'
import ItemListContainer from './components/common/itemListContainer/ItemListContainer'
/*
import BarraNav from './components/common/BarraNav/BarraNav'
import BarraNews from './components/common/BarraNews/BarraNews'
import ImgCenter from './components/common/imgCenter/ImgCenter'
import ItemListContainer from './components/common/itemListContainer/ItemListContainer'
*/
import Layout from './components/layout/Layout'
import GarantiaRma from './components/pages/GarantiaRma/GarantiaRma'

//la borramos x un ratito
import ItemDetail from './components/pages/ItemDetail/ItemDetail'

//import NavBar from './components/pages/navbar/NavBar'
//import Productos from './components/pages/productos/Productos'
//import Home from './components/pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={ <ItemListContainer/> } /> 
            <Route path='/category/:categoryName' element={ <ItemListContainer/> }/>
            <Route path='/detalle' element={<ItemDetail/>} />   
            <Route path='/GarantiaRma' element={<GarantiaRma/>} />
          </Route>       
        </Routes> 
      </BrowserRouter> 
  </> 
  )
}

export default App


{/*<BarraNews/>
<ItemListContainer greeting={ 'Bienvenido' } />
        <NavBar/>
        <BarraNav/>
        <ImgCenter/>/
*/}
