import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import JavaImg from '../assets/java.png';

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
				<div>
					<p className='text-4xl inline font-bold border-b-4 border-red-400'>
						Technologies
					</p>
					<p className='py-4'>These are the technologies I've worked with.</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img src={JavaScript} alt='JavaScript Icon' className='w-20 mx-auto' />
						<p className='py-4'>JavaScript</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img src={ReactImg} alt='React Icon' className='w-20 mx-auto' />
						<p className='py-4'>React.js</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img src={CSS} alt='CSS Icon' className='w-20 mx-auto' />
						<p className='py-4'>CSS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img src={JavaImg} alt='HTML Icon' className='w-20 mx-auto' />
						<p className='py-4'>Java</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
