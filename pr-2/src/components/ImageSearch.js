import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
	const [text, setText] = useState('');
	const onSubmit = (e) => {
		searchText(text);
		e.preventDefault();
	};
	return (
		<div className="max-w-sm mx-auto my-10">
			<form onSubmit={onSubmit} className="w-full max-w-sm">
				<div className="flex items-center border-b  border-teal-500 py-2">
					<input onChange={e => setText(e.target.value)} type="text" placeholder="Search Image Term..." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
					<button className="flex-shrink-0 bg-teal-500 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default ImageSearch;