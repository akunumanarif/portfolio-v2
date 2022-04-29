import React from 'react';
import Images from '../../constants/Images';
import './Navbar.scss';
const Navbar = () => {
	return (
		<nav>
			<div className="app__navbar">
				<img src={Images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{[ 'home', 'about', 'work', 'skill', 'contact' ].map((item) => (
					<li key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
