import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
	return (
		<ul className='hidden md:flex'>
			<MenuItem text='Home' location='home' />
			<MenuItem text='About' location='about' />
			<MenuItem text='Skills' location='skills' />
			<MenuItem text='Projects' location='projects' />
			<MenuItem text='Contact' location='contact' />
		</ul>
	);
};

export default Menu;
