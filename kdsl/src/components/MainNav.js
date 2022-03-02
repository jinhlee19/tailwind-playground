import React from 'react'

const MainNav = () => {
  return (
    <div className="flex">
        <nav className="space-x-2">
          <ul className="flex justify-between text-lg">
            <li>실시간수업</li>
            <li>VOD</li>
            <li>집중레슨</li>
            <li>커뮤니티</li>
            <li>사용안내</li>
          </ul>
        </nav>
        <nav className="">
          <ul className="flex justify-between text-md font-thin">
            <li>신규클래스</li>
            <li>시그니쳐</li>
            <li>오픈예정</li>
            <li>커뮤니티</li>
            <li>크리에이터 지원</li>
          </ul>
        </nav>
      </div>
  )
}

export default MainNav