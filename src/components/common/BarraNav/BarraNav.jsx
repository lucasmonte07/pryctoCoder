
import { Link } from 'react-router-dom';
import './BarraNav.css'
const BarraNav = () => {
  return (
    <div className="ContainerBarraNav">
    
        <nav>
            <ul>
                <Link className='prueba'> Productos </Link>
                <Link className='prueba'> Empresas </Link>
                <Link to='/GarantiaRma' className='prueba'> Grantía Rma </Link>
                <Link className='prueba'> Canales de Pago </Link>
                <Link className='prueba'> Quiero ser cliente </Link>
                <Link className='prueba'> Quienes somos  </Link>
            </ul>
            <div>
          <img src="" alt="" />
        </div>
        </nav> 
        
    </div>
  )
}

export default BarraNav;