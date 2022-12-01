import React from 'react';
import { Link } from 'react-scroll';

const MobileMenuItem = ({ handleClick, location, text }) => {
	return (
		<li className='py-6 text-4xl'>
			<Link onClick={handleClick} to={location} smooth={true} duration={500}>
				{text}
			</Link>
		</li>
	);
};

export default MobileMenuItem;
