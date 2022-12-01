import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
		>
			<form
				method='POST'
				action='https://getform.io/f/f6eb7519-2352-4290-b16b-0050f4c9bd47'
				className='flex flex-col max-w-[600px] w-full'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-b-red-400 text-gray-300'>
						Contact
					</p>
					<p className='text-gray-400 py-4'>Submit the form below.</p>
				</div>
				<input className='p-2 ' type='text' name='name' required placeholder={'Name'} />
				<input
					className='my-4 p-2'
					type='email'
					name='email'
					required
					placeholder='Email'
				/>

				<textarea
					className='p-2'
					name='message'
					cols='30'
					rows='10'
					placeholder='Message...'
					required
				></textarea>
				<input
					type='submit'
					className='text-white border-2 px-6 py-3 my-4 mx-auto flex items-center hover:bg-red-400 hover:font-bold'
				/>
			</form>
		</div>
	);
};

export default Contact;
