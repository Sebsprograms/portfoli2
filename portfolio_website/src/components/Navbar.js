import logo from '../assets/logo.png';
import './styles/Navbar.css';

import Navigation from './Navigation';

function Navbar() {
    return (<nav id='navBar'>
        <img src={logo}  id='logo' alt='logo'/>
        <Navigation />
        

    </nav>);
}

export default Navbar;