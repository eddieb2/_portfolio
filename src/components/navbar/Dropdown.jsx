import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const DropdownIcon = ({ dropDown, handleClick }) => {
	return (
		<div className='z-10 cursor-pointer md:hidden' onClick={handleClick}>
			{!dropDown ? <FaBars size={30} /> : <FaTimes size={30} />}
		</div>
	);
};

export default DropdownIcon;
