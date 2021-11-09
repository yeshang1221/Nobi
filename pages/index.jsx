import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Link from 'next/link';
function HomePage() {
  return (
    <>
      <blockquote className='body-background'></blockquote>
      <NavBar />
      <header className='header-hero'>
        <img src='/imgaes/role-left.png' alt='左方英雄角色' />
        <img src='/images/role-right.png' alt='右方英雄角色' />
      </header>
      <article className='container'>
        <main className='container__main'>
          <div className='board-background'>
            <span className='board-background__label'></span>
            <span className='board-background__top'></span>
            <span className='board-background__bottom'></span>
            <span className='board-background__left'></span>
            <span className='board-background__right'></span>
          </div>
          <h1 className='container__title'>
            <span className='container__sub'>News</span>最新消息
          </h1>
          <h2 className='container__caption'>點選消息獲取詳細資訊</h2>
          <ul className='list'>
            <li>
              <Link href='/News'>
                <a>
                  <span className='list__time'>09/10</span>
                  <span className='list__content'>教師研習營報名請點我</span>
                </a>
              </Link>
            </li>
            <li>
              <span className='list__time'>09/09</span>
              <span className='list__content'>
                新北電競王 健康特攻隊公告
                感謝大家對電競往地支持，由於參與民眾踴躍，為提供更優質遊戲環境
                電競王遊戲網站自即日起暫時停機
              </span>
            </li>
            <li>
              <span className='list__time'>09/08</span>
              <span className='list__content'>教師研習營報名請點我</span>
            </li>
            <li>
              <span className='list__time'>09/07</span>
              <span className='list__content'>教師研習營報名請點我</span>
            </li>
            <li>
              <span className='list__time'>09/06</span>
              <span className='list__content'>教師研習營報名請點我</span>
            </li>
          </ul>
        </main>
        <article className='fb-page'>
          <iframe
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fntpchealth%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
            width='340'
            height='500'
            // style='border: none; overflow: hidden'
            scrolling='no'
            // frameborder="0"
            // allowfullscreen="true"
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          ></iframe>
        </article>
      </article>
      <Footer />
    </>
  );
}
export default HomePage;
