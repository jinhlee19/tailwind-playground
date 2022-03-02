import React from 'react';

const MainNav = () => {
	return (
		<div className="flex flex-row pb-2">
			<nav className="flex items-center">
				<ul className="flex justify-between text-md items-center space-x-4 pr-12 ">
					<li>실시간수업</li>
					<li>VOD</li>
					<li>집중레슨</li>
					<li>커뮤니티</li>
					<li>사용안내</li>
				</ul>
                <span className='border-l-[1px] border-amber-300 h-4'></span>
				<ul className="flex justify-between items-center text-sm font-normal  space-x-6 pl-8">
					<li>신규클래스</li>
					<li>시그니쳐</li>
					<li>오픈예정</li>
					<li>커뮤니티</li>
					<li>크리에이터 지원</li>
				</ul>
			</nav>
		</div>
	);
};

export default MainNav;
