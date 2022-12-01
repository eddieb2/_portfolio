// Component Imports
import SkillItem from './SkillItem';
// Image Filepaths
import React from 'react';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import JavaImg from '../../assets/java.png';
import Aseprite from '../../assets/aseprite.png';
import HTML from '../../assets/html.png';
import Python from '../../assets/python.png';
import Nodejs from '../../assets/node.png';
import SQL from '../../assets/sql.png';

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			{/* container */}
			<div className='xl:max-w-[1000px] max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full border-b-4 border-red-400'>
				<div>
					<p className='text-4xl inline font-bold border-b-4 border-red-400'>Skills</p>
					<p className='py-4'>These are the technologies I've worked with.</p>
				</div>

				{/* Anything over 6 SkillItems causes overflow */}
				<div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 overflow-scroll overflow-x-hidden md:overflow-hidden p-1'>
					<SkillItem icon={HTML} text='HTML' altTag='HTML Icon' />
					<SkillItem icon={CSS} text='CSS' altTag='CSS Icon' />
					<SkillItem icon={JavaScript} text='Javascript' altTag='Javascript Icon' />
					<SkillItem icon={ReactImg} text='React.js' altTag='React.js Icon' />
					<SkillItem icon={Nodejs} text='Node.js' altTag='Node.js Icon' />
					<SkillItem icon={Python} text='Python' altTag='Python Icon' />
					<SkillItem icon={JavaImg} text='Java' altTag='Java Icon' />
					<SkillItem icon={SQL} text='SQL' altTag='SQL Icon' />
				</div>
			</div>
		</div>
	);
};

export default Skills;
