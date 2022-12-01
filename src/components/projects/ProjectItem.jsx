import React, { useState, useEffect } from 'react';
import CodePhoto from '../../assets/code_photo.jpg';

const ProjectItem = ({
	projectImg = CodePhoto,
	demoURL = '#',
	codeURL = 'https://github.com/eddieb2',
	text = 'Application',
	disable = false, // disable/hide demo button
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			id='projectItemContainer' // not in use?
			style={{ backgroundImage: `url(${projectImg})` }}
			className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
			onMouseEnter={() => setIsHovered(true)}
		>
			<div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
				<span className='sm:text-2xl text-lg font-bold text-white tracking-wider'>
					{text}
				</span>
				{isHovered ? (
					<div className='pt-8 text-center flex sm:flex-row flex-col '>
						{!disable ? (
							<a href={demoURL} className='px-3' target='_blank'>
								<button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold md:text-lg text-sm hover:scale-110 duration-200 sm:m-auto m-2'>
									Demo
								</button>
							</a>
						) : null}
						<a href={codeURL} target='_blank'>
							<button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold md:text-lg text-sm hover:scale-110 duration-200'>
								Code
							</button>
						</a>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProjectItem;
