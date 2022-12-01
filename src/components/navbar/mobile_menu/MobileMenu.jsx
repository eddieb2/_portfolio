import React from 'react';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = ({ dropDown, handleClick }) => {
	return (
		<div
			className={
				!dropDown
					? ' hidden'
					: 'absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f] '
			}
		>
			<ul>
				<MobileMenuItem text='Home' location='home' handleClick={handleClick} />
				<MobileMenuItem text='About' location='about' handleClick={handleClick} />
				<MobileMenuItem text='Skills' location='skills' handleClick={handleClick} />
				<MobileMenuItem text='Projects' location='projects' handleClick={handleClick} />
				<MobileMenuItem text='Contact' location='contact' handleClick={handleClick} />
			</ul>
		</div>
	);
};

export default MobileMenu;
