import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='flex h-screen w-full items-center justify-center bg-[#0a192f] p-4'
		>
			<form
				method='POST'
				action='https://getform.io/f/f6eb7519-2352-4290-b16b-0050f4c9bd47'
				className='flex w-full max-w-[600px] flex-col'
			>
				<div className='pb-8'>
					<p className='inline border-b-4 border-b-red-400 text-4xl font-bold text-gray-300'>
						Contact
					</p>
					<p className='py-4 text-gray-400'>Submit the form below.</p>
				</div>
				<input
					className='rounded-lg p-2 invalid:border-red-500 invalid:text-red-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:invalid:border-red-500 focus:invalid:ring-red-500'
					type='text'
					name='name'
					required
					placeholder={'Name'}
				/>
				<input
					className='my-4 rounded-lg p-2 invalid:border-red-500 invalid:text-red-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:invalid:border-red-500 focus:invalid:ring-red-500'
					type='email'
					name='email'
					required
					placeholder='Email'
				/>

				<textarea
					className='rounded-lg p-2 invalid:border-red-500 invalid:text-red-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:invalid:border-red-500 focus:invalid:ring-red-500'
					name='message'
					cols='30'
					rows='10'
					placeholder='Message...'
					required
				></textarea>
				<input
					type='submit'
					className='my-4 mx-auto flex items-center border-2 px-6 py-3 text-white hover:bg-red-400 hover:font-bold'
				/>
			</form>
		</div>
	);
};

export default Contact;
