import React from 'react';

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
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
							quae? Atque impedit maiores possimus nam, hic ab nostrum sunt eum
							recusandae, ea voluptates dolorum dignissimos vero dicta cumque saepe
							repellendus?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
