import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-red-400'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Eddie Blanciak</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Software Engineer</h2>
				<p className='text-[#8892b0] py-4 max-w[700px]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero explicabo iusto
					accusantium dolore dignissimos officia quisquam voluptatibus omnis, illum
					quibusdam autem dolorem sed recusandae tempore consectetur ducimus possimus
					quia. Officiis?
				</p>
				<div>
					<Link to='projects' smooth={true} duration={500}>
						<button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:font-bold'>
							View Work
							<span className='group-hover:rotate-90 duration-300'>
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