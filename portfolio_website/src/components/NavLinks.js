import { motion } from 'framer-motion';

const Navigation = (props) => {
    const animateFrom = { opacity: 0, x: 40 };
    const animateTo = { opacity: 1, x: 0 };

    return (
        <ul className="navLinks">
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.1}} onClick={() => props.closeMenu()}>
                <a href="#" className="menuLink">Home</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.2}} onClick={() => props.closeMenu()}>
                <a href="#" className="menuLink">About</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.3}} onClick={() => props.closeMenu()}>
                <a href="#" className="menuLink">Projects</a>
            </motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.4}} onClick={() => props.closeMenu()}>
                <a href="#" className="menuLink">Contact</a>
            </motion.li>
        </ul>
    );
}

export default Navigation;

