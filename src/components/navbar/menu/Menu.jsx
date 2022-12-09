import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
	return (
		<ul className='hidden md:flex'>
			<MenuItem text='Home' location='home' />
			<MenuItem text='About' location='about' />
			<MenuItem text='Skills' location='skills' />
			<MenuItem text='Software' location='projects' />
			<MenuItem text='Contact' location='contact' />
			<a href='https://www.instagram.com/blanciakllc/' target='_blank'>
				Construction
			</a>
		</ul>
	);
};

export default Menu;
