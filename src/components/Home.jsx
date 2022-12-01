import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div name='home' className='h-screen w-full bg-[#0a192f]'>
			{/* container */}
			<div className=' mx-auto flex h-full max-w-[800px] flex-col justify-center border-b-4 border-red-400 px-8 xl:max-w-[1000px]'>
				<p className='text-red-400'>Hi, my name is</p>
				<h1 className='text-4xl font-bold text-[#ccd6f6] sm:text-7xl'>Eddie Blanciak</h1>
				<h2 className='text-4xl font-bold text-[#8892b0] sm:text-7xl'>Software Engineer</h2>
				<p className='max-w[700px] py-4 text-[#8892b0]'></p>
				<div>
					<Link to='projects' smooth={true} duration={500}>
						<button className='group my-2 flex items-center border-2 px-6 py-3 text-white hover:bg-red-400 hover:font-bold'>
							View Work
							<span className='duration-300 group-hover:rotate-90'>
								<HiArrowNarrowRight className='ml-2' />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;

// bg-[#0a192f]
