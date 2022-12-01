import React, { useState } from 'react';
// Image Imports
import dark_zone_sprite from '../../assets/dark_zone_sprite.png';
import Menu from './menu/Menu';
import MobileMenu from './mobile_menu/MobileMenu';
import DropdownIcon from './Dropdown';
import Sidebar from './sidebar/Sidebar';

const NavBar = () => {
	const [dropDown, setDropDown] = useState(false);

	const handleClick = () => {
		setDropDown(!dropDown);
	};

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
			<div>
				<img src={dark_zone_sprite} alt='Logo Image' />
			</div>
			<Menu />
			<DropdownIcon dropDown={dropDown} handleClick={handleClick} />
			<MobileMenu dropDown={dropDown} handleClick={handleClick} />
			<Sidebar />
		</div>
	);
};

export default NavBar;
