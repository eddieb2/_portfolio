import React from 'react';
import { Link } from 'react-scroll';

const MenuItem = ({ text, location }) => {
	return (
		<li>
			<Link
				className='hover:font-bold hover:text-red-400 hover:duration-300'
				to={location}
				smooth={true}
				duration={500}
			>
				{text}
			</Link>
		</li>
	);
};

export default MenuItem;
