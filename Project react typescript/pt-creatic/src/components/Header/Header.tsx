import { type ReactElement } from "react";
import { NavLink } from 'react-router-dom';

const Header = (): ReactElement => {
	return (
		<header className='header'>
			<NavLink to="/">Inicio</NavLink>
			<NavLink to="/quienes-somos">Quienes Somos</NavLink>
			<NavLink to="/contactanos">Contactanos</NavLink>
			<NavLink to="/registrarse">Registrarse</NavLink>
		</header>
	);
};

export default Header;
