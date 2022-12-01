import React from 'react';

const SkillItem = ({ icon, altTag, text }) => {
	return (
		<div className='shadow-sm shadow-[#ffff] p-5'>
			<img src={icon} alt={altTag} className='sm:w-20 w-10 mx-auto' />
			<p className='py-4'>{text}</p>
		</div>
	);
};

export default SkillItem;
