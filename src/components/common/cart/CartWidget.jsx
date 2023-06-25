import { CiUser } from 'react-icons/ci';
import { CiLogin } from 'react-icons/ci';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartWidget.css'
const CartWidget = () => {
  return (
    <div className='Icons'>
      <CiUser/>
      <p> Usuarios </p>
      <CiLogin/>
      <p> Ingresar </p>
      <AiOutlineUsergroupAdd/>
      <p> Registrarse </p>
      <AiOutlineShoppingCart/>
    </div>
  )
}

export default CartWidget;