import React from 'react';
import ProjectItem from './ProjectItem';
import WorkImg from '../../assets/projects/workImg.jpeg';
import RealEstate from '../../assets/projects/realestate.jpg';

const Projects = () => {
	return (
		<div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-400'>
						Work
					</p>
					<p className='py-6'>Check out some of my recent work.</p>
				</div>

				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* FIXME add in links to vidoes and repos. supply image */}
					<ProjectItem /*demoURL='' codeURL='' projectImg={WorkImg} */ />
					<ProjectItem /*demoURL='' codeURL='' projectImg={RealEstate} */ />
					<ProjectItem /*demoURL='' codeURL='' projectImg={WorkImg} */ />
					<ProjectItem /*demoURL='' codeURL='' projectImg={RealEstate} */ />
					<ProjectItem /*demoURL='' codeURL='' projectImg={WorkImg} */ />
					<ProjectItem /*demoURL='' codeURL='' projectImg={RealEstate} */ />
				</div>
			</div>
		</div>
	);
};

export default Projects;
