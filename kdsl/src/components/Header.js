const Header = () => {
	return (
		<div className="flex flex-row justify-between space-y-2">
			<div className="text-left flex">
				<h1 className="text-2xl uppercase font-black">Class404</h1>
				<svg className="inline-block fill-current text-amber-400 w-4 h-4" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 23.5 6 31l4-12-9-7h11L16 .5 20 12h11l-9 7 4 12z" />
				</svg>
			</div>
			<div className="flex space-x-10">
				<svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 38 38">
					<path fill="none" stroke-miterlimit="10" stroke="#000" d="M13 28.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM25 28.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM13 28.5h6M7 28.5 5 1H0M6.5 21.5 28 20l3.5-15h-26" />
				</svg>
			</div>
		</div>
	);
};

export default Header;
