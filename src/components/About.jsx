import React from 'react';
import LambdaBadge from '../assets/lambdabadge.png';
import WGUBadge from '../assets/wgu.png';

const About = () => {
	return (
		<div
			name='about'
			className='flex h-screen w-full justify-center bg-[#0a192f] text-gray-300'
		>
			{/* container */}
			<div className='flex h-full w-full max-w-[800px] flex-col items-center justify-center border-b-4 border-red-400 xl:max-w-[1000px]'>
				<div className='grid w-full max-w-[1000px] grid-cols-2 gap-8'>
					<div className='pb-8 pl-4 sm:text-right'>
						<p className='inline border-b-4 border-red-400 text-4xl font-bold'>About</p>
					</div>
					<div></div>
				</div>

				<div className='grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2'>
					<div className='text-4xl font-bold sm:text-left'>
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
				<div className='mt-10 flex w-[50%] justify-evenly'>
					<a
						href='https://www.credly.com/badges/2d39a218-35e4-437e-b465-1e8328677228/public_url'
						target='_blank'
					>
						<img
							src={LambdaBadge}
							className='duration-200 hover:scale-90'
							alt='BloomTech badge'
						/>
					</a>
					<a>
						<img
							src={WGUBadge}
							className='duration-200 hover:scale-90'
							alt='WGU logo'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
