import React from 'react';
import LambdaBadge from '../assets/lambdabadge.png';
import WGUBadge from '../assets/wgu.png';

const About = () => {
	return (
		<div
			name='about'
			className='flex justify-center w-full h-screen bg-[#0a192f] text-gray-300'
		>
			{/* container */}
			<div className='xl:max-w-[1000px] max-w-[800px] flex flex-col justify-center items-center w-full h-full border-b-4 border-red-400'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-red-400'>About</p>
					</div>
					<div></div>
				</div>

				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-left text-4xl font-bold'>
						<p>Hi. I'm Eddie, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I am currently pursuing a B.S. in Computer Science from Western
							Governors University. I am also a graduate from BloomTech, formerly
							known as Lambda School.
						</p>
					</div>
				</div>
				<div className='w-[50%] flex justify-evenly mt-10'>
					<a
						href='https://www.credly.com/badges/2d39a218-35e4-437e-b465-1e8328677228/public_url'
						target='_blank'
					>
						<img
							src={LambdaBadge}
							className='hover:scale-90 duration-200'
							alt='BloomTech badge'
						/>
					</a>
					<a>
						<img
							src={WGUBadge}
							className='hover:scale-90 duration-200'
							alt='WGU logo'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
