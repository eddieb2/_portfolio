import React from 'react';
import ProjectItem from './ProjectItem';
import PortfolioImg from '../../assets/portfolio_website.png';
import JavaFXAppImg from '../../assets/javafx2.png';
import BudgetApp from '../../assets/budget_blocks.png';
import Conways from '../../assets/conways.png';

const Projects = () => {
	return (
		<div name='projects' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
			{/* container */}
			<div className='xl:max-w-[1000px] max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full border-b-4 border-red-400'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-400'>
						Software Projects
					</p>
					<p className='py-6'>Check out some of my recent work.</p>
				</div>

				{/* Anything over 6 ProjectItems causes overflow */}
				<div className='grid grid-cols-3 gap-8 overflow-scroll overflow-x-hidden  md:overflow-hidden'>
					{/* FIXME add in links to vidoes and repos. supply image */}
					<ProjectItem
						text='Portfolio'
						demoURL='#'
						codeURL='https://github.com/eddieb2/portfolio_3'
						disable={true}
						projectImg={PortfolioImg}
					/>
					<ProjectItem
						text='Scheduling App.'
						demoURL='https://youtu.be/LEHPoJ39nLI'
						codeURL='https://github.com/eddieb2/c195'
						projectImg={JavaFXAppImg}
					/>
					<ProjectItem
						text='Budgeting App.'
						// demoURL='https://youtu.be/LEHPoJ39nLI'
						disable={true}
						codeURL='https://github.com/BloomTech-Labs/budget-blocks-fe'
						projectImg={BudgetApp}
					/>
					<ProjectItem
						text='Conways'
						demoURL='https://conways-game-of-life-ten.vercel.app/'
						codeURL='https://github.com/eddieb2/ConwaysGameOfLife'
						projectImg={Conways}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
