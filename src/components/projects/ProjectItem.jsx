import React, { useState, useEffect } from 'react';
import CodePhoto from '../../assets/code_photo.jpg';

const ProjectItem = ({
	projectImg = CodePhoto,
	demoURL = 'https://github.com/eddieb2',
	codeURL = 'https://github.com/eddieb2',
	text = 'Application',
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			id='projectItemContainer'
			style={{ backgroundImage: `url(${projectImg})` }}
			className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
			onMouseEnter={() => setIsHovered(true)}
		>
			<div className='opacity-0 group-hover:opacity-100'>
				<span className='text-2xl font-bold text-white tracking-wider'>{text}</span>
				{isHovered ? (
					<div className='pt-8 text-center'>
						<a href={demoURL} className='px-3' target='_blank'>
							<button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
								Demo
							</button>
						</a>
						<a href={codeURL} target='_blank'>
							<button className='text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>
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
