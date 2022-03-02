import React from 'react'

const Footer = () => {
  return (
    <footer className='footer flex flex-col border-t-[1px] border-gray-300'>
        <div className="footer__main flex justify-between items-stretch my-10">
            <div className="footer__content">
                <h1 className='text-2xl font-bold uppercase'>class404</h1>
                <span className='text-md font-medium text-gray-400'>함께 성장하는 놀이터</span>
            </div>
            <nav className="footer__shortcut flex justify-between">
                <ul>
                    <li><a href="">메뉴제목1</a></li>
                    <li><a href="">메뉴제목2</a></li>
                    <li><a href="">메뉴제목3</a></li>
                    <li><a href="">메뉴제목4</a></li>
                </ul>
                <ul>
                    <li><a href="">메뉴제목1</a></li>
                    <li><a href="">메뉴제목2</a></li>
                    <li><a href="">메뉴제목3</a></li>
                    <li><a href="">메뉴제목4</a></li>
                </ul>
                <ul>
                    <li><a href="">메뉴제목1</a></li>
                    <li><a href="">메뉴제목2</a></li>
                    <li><a href="">메뉴제목3</a></li>
                    <li><a href="">메뉴제목4</a></li>
                </ul>
            </nav>
        </div>
        <div className="footer__info-box--light text-xs text-gray-400 py-4 text-left">
            404ERR co. | 대표 이대표 | 용인시 기흥구 어딘가 | info@kidsly.co.kr | 전화번호: 1111-1111 | 사업자등록번호 : 111-11-11111 | 통신판매업신고 : 0000-경기용인-00000 | 키즐리는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매업과 통신판매중개업을 영위하고 있습니다. 키즐리는 통신판매중개자로서 중개하는 통신판매에 관하여서는 통신판매의 당사자가 아니므로 어떠한 책임도 부담하지 아니합니다.
        </div>
    </footer>
  )
}

export default Footer