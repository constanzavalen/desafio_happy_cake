
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <nav className='NavBar'>
        <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
        </div>
        <div>
            Happy Cake
        </div>
    </nav>
  )
}

export default NavBar