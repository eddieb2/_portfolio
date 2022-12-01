import React from 'react';

const SidebarItem = ({ socialRedirect, text, icon }) => {
	return (
		<li className='w-[170px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 border-b-2 border-b-red-400 border-r-red-400 border-r-4 rounded-lg'>
			<a
				className='flex justify-between items-center w-full text-gray-300'
				href='#'
				onClick={() => socialRedirect(text)}
			>
				{text} {icon}
			</a>
		</li>
	);
};

export default SidebarItem;
