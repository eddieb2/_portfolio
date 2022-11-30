import React, { useState } from 'react';
import Logo from '../assets/logo1.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import EB from '../assets/EB.png';

const NavBar = () => {
	const [dropDown, setDropDown] = useState(false);

	const handleClick = () => {
		setDropDown(!dropDown);
	};

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
			<div>
				<img src={EB} alt='Logo Image' style={{ width: '50px' }} />
			</div>
			{/* Menu */}
			<ul className='hidden md:flex'>
				<li>
					<Link
						className='hover:font-bold hover:text-red-400 hover:duration-300'
						to='home'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className='hover:font-bold hover:text-red-400 hover:duration-300'
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className='hover:font-bold hover:text-red-400 hover:duration-300'
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li>
					<Link
						className='hover:font-bold hover:text-red-400 hover:duration-300'
						to='projects'
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						className='hover:font-bold hover:text-red-400 hover:duration-300'
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* Dropdown hamburger */}
			<div className='md:hidden z-10 cursor-pointer' onClick={handleClick}>
				{!dropDown ? <FaBars /> : <FaTimes />}
			</div>
			{/* Mobile menu */}
			<div
				className={
					!dropDown
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<ul>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='home' smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='projects' smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			{/* Sidebar Links */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='/'
						>
							Linkedin <FaLinkedin size={40} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='/'
						>
							Github <FaGithub size={40} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='/'
						>
							Email <HiOutlineMail size={40} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='/'
						>
							Resume <BsFillPersonLinesFill size={40} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
