import NavLinks from './NavLinks';
import {CgMenuGridR} from 'react-icons/cg';
import {CgCloseR} from 'react-icons/cg';
import { useState } from 'react';

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = (<CgMenuGridR className='hamburger' size='50px' onClick={() => setOpen(!open)}/>);
    const closeIcon = (<CgCloseR className='hamburger' size='50px' onClick={() => setOpen(!open)}/>);

    const closeMenu = () => setOpen(false);
    return (
        <nav className='navigation'>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks closeMenu={closeMenu} />}
        </nav>
    );
}

export default Navigation;