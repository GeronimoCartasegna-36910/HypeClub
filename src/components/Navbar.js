import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <header>
            <Link to="/"><strong><em>Hype<span>Club</span></em></strong></Link>
            <Link to="/category/3" className='navbar-link'>Sneakers High</Link>
            <Link to="/category/5" className='navbar-link'>Sneakers Low</Link>
            <p className='navbar-icon'><FontAwesomeIcon icon={faCartShopping} /></p>
        </header>
    );
}

export default Navbar;