import React from 'react';

const MainNav = () => {
	return (
		<div className="flex flex-row pb-2">
			<nav className="flex items-center">
            <span className='border-l-2 border-amber-300 h-4 mr-8'></span>
				<ul className="flex justify-between text-md items-center space-x-6 pr-12 ">
					<li>실시간수업</li>
					<li>VOD</li>
					<li>집중레슨</li>
					<li>오프라인</li>
					<li>커뮤니티</li>
				</ul>
                <span className='border-l-2 border-amber-300 h-4'></span>
				<ul className="flex justify-between items-center text-sm font-normal  space-x-6 pl-10">
					<li>신규클래스</li>
					<li>시그니쳐</li>
					<li>오픈예정</li>
					<li>404 전시전</li>
					<li>크리에이터 지원</li>
				</ul>
                <span className='border-l-2 border-amber-300 h-4 ml-8'></span>
			</nav>
		</div>
	);
};

export default MainNav;
