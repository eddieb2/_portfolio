import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';

const Footer = ({ socialRedirect }) => {
	return (
		<div
			name='about'
			className='flex w-full bg-[#0a192f] text-gray-300 border-b-2 border-red-400 justify-evenly p-2 lg:hidden'
		>
			<FaLinkedin size={40} onClick={() => socialRedirect('Linkedin')} />
			<FaGithub size={40} onClick={() => socialRedirect('Github')} />
			<FiInstagram size={40} onClick={() => socialRedirect('Instagram')} />
			<BsFillPersonLinesFill size={40} onClick={() => socialRedirect('Resume')} />
		</div>
	);
};

export default Footer;
