import React from 'react';

const SkillItem = ({ icon, altTag, text }) => {
	return (
		<div className='p-5 shadow-sm shadow-[#ffff]'>
			<img src={icon} alt={altTag} className='mx-auto w-10 sm:w-20' />
			<p className='py-4'>{text}</p>
		</div>
	);
};

export default SkillItem;
