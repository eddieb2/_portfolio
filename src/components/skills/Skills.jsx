// Component Imports
import SkillItem from './SkillItem';
// Image Filepaths
import React from 'react';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import JavaImg from '../../assets/java.png';
import HTML from '../../assets/html.png';
import Python from '../../assets/python.png';
import Nodejs from '../../assets/node.png';
import SQL from '../../assets/sql.png';
import TW from '../../assets/tailwind.png';

const Skills = () => {
	return (
		<div name='skills' className='h-screen w-full bg-[#0a192f] text-gray-300'>
			{/* container */}
			<div className='mx-auto flex h-full w-full max-w-[800px] flex-col justify-center border-b-4 border-red-400 p-4 xl:max-w-[1000px]'>
				<div>
					<p className='inline border-b-4 border-red-400 text-4xl font-bold'>Skills</p>
					<p className='py-4'>These are some of the technologies I've worked with.</p>
				</div>

				{/* Anything over 6 SkillItems causes overflow */}
				<div className='grid w-full grid-cols-3 gap-4 overflow-scroll overflow-x-hidden p-1 py-8 text-center sm:grid-cols-4 md:overflow-hidden'>
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
