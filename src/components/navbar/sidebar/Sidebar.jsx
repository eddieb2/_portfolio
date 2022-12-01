import React from 'react';
// Image Imports
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import pdf from '../../../assets/resume.pdf';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
	const socialRedirect = (socialMediaName) => {
		console.log(socialMediaName);
		switch (socialMediaName) {
			case 'Linkedin':
				window.open('https://www.linkedin.com/in/edward-blanciak/', '_blank');
				break;
			case 'Github':
				window.open('https://github.com/eddieb2', '_blank');
				break;
			case 'Instagram':
				window.open('https://www.instagram.com/blanciakllc/', '_blank');
				break;
			case 'Resume':
				window.open(pdf, 'fullscreen=yes');
				break;
		}
	};

	return (
		<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
			<ul>
				<SidebarItem
					socialRedirect={socialRedirect}
					text='Linkedin'
					icon={<FaLinkedin size={40} />}
				/>
				<SidebarItem
					socialRedirect={socialRedirect}
					text='Github'
					icon={<FaGithub size={40} />}
				/>
				<SidebarItem
					socialRedirect={socialRedirect}
					text='Instagram'
					icon={<FiInstagram size={40} />}
				/>
				<SidebarItem
					socialRedirect={socialRedirect}
					text='Resume'
					icon={<BsFillPersonLinesFill size={40} />}
				/>
			</ul>
		</div>
	);
};

export default Sidebar;
