import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <header>
            <strong><em>Hype<span>Club</span></em></strong>
            <a href="#" className='navbar-link'>Productos</a>
            <p className='navbar-icon'><FontAwesomeIcon icon={faCartShopping} /></p>
        </header>
    );
}

export default Navbar;