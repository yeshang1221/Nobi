import Link from 'next/link';
import { useEffect, useState } from 'react';

function NavBar() {
  //漢堡選單function
  //className
  const [navClick, setNavClick] = useState(false);
  const triggerBtn = 'navbar__trigger-btn';
  const triggerBtnActive = 'navbar__trigger-btn active';
  return (
    <>
      <nav className='navbar'>
        <main className='navbar__container'>
          <span className='navbar__preview-number'>
            網站瀏覽人次 ：029324233
          </span>
          <div
            id='navbar-trigger'
            className={navClick ? triggerBtnActive : triggerBtn}
            onClick={() => {
              setNavClick(!navClick);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className='navbar__link-items'>
            <li>
              <Link href='/'>
                <a>首頁</a>
              </Link>
            </li>
            <li className='navbar__item-title'>
              活動緣起
              <ul>
                <li>
                  <Link href='/Activity/story'>
                    <a>背景故事</a>
                  </Link>
                </li>
                <li>
                  <Link href='/Activity/role'>
                    <a>角色介紹</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='navbar__item-title'>
              競賽辦法
              <ul>
                <li>
                  <Link href='/Competition_method/personal'>
                    <a>個人戰</a>
                  </Link>
                </li>
                <li>
                  <Link href='/Competition_method/preliminary'>
                    <a>國小版初賽</a>
                  </Link>
                </li>
                <li>
                  <Link href='/Competition_method/skill'>
                    <a>角色技能</a>
                  </Link>
                </li>
                {/* <!-- <li><a href="competition-method__download.html">下載專區</a></li> --> */}
                <li>
                  <Link href='/Competition_method/prizes'>
                    <a>活動好康</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='navbar__item-title'>
              影音專區
              <ul>
                <li>
                  <Link href='/AudioVisual/photo'>
                    <a>活動相片</a>
                  </Link>
                </li>
                <li>
                  <Link href='/AudioVisual/video'>
                    <a>活動影片</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/Competition'>
                <a>網路競賽</a>
              </Link>
            </li>
            <li>
              <Link href='/Problem'>
                <a>常見問題</a>
              </Link>
            </li>
            <li>
              <Link href='/ContactUs'>
                <a>聯絡我們</a>
              </Link>
            </li>
          </ul>
        </main>
      </nav>
    </>
  );
}
export default NavBar;
