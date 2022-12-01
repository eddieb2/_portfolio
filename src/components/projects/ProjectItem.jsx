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
			className='content-div group container mx-auto flex items-center justify-center rounded-md shadow-lg shadow-[#040c16]'
			onMouseEnter={() => setIsHovered(true)}
		>
			<div className='flex flex-col items-center opacity-0 group-hover:opacity-100'>
				<span className='text-lg font-bold tracking-wider text-white sm:text-2xl'>
					{text}
				</span>
				{isHovered ? (
					<div className='flex flex-col pt-8 text-center sm:flex-row '>
						{!disable ? (
							<a href={demoURL} className='px-3' target='_blank'>
								<button className='m-2 rounded-lg bg-white px-4 py-3 text-center text-sm font-bold text-gray-700 duration-200 hover:scale-110 sm:m-auto md:text-lg'>
									Demo
								</button>
							</a>
						) : null}
						<a href={codeURL} target='_blank'>
							<button className='rounded-lg bg-white px-4 py-3 text-center text-sm font-bold text-gray-700 duration-200 hover:scale-110 md:text-lg'>
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
