import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const DropdownIcon = ({ dropDown, handleClick }) => {
	return (
		<div className='md:hidden z-10 cursor-pointer' onClick={handleClick}>
			{!dropDown ? <FaBars size={30} /> : <FaTimes size={30} />}
		</div>
	);
};

export default DropdownIcon;
