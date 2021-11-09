import React from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Role() {
  return (
    <>
      <blockquote className='body-background body-background--page'></blockquote>

      <NavBar />
      <header className='header'></header>
      <article className='container'>
        <main className='container__main'>
          <div className='board-background'>
            <span className='board-background__label board-background__label--title'>
              為了健康而戰的戰士⋯⋯
            </span>
            <span className='board-background__top'></span>
            <span className='board-background__bottom'></span>
            <span className='board-background__left'></span>
            <span className='board-background__right'></span>
          </div>
          <h1 className='container__title container__title--right'>
            <span className='container__sub'>活動緣起</span>角色介紹
          </h1>
          <img src='/images/role-show.svg' alt='英雄即將登場' />
          {/* <!-- <section className="role-board">
          <main className="role-board__content">
            <ul id="fire" className="active">
              <li>
                <img src="assets/images/fire-role_01.svg" alt="火焰劍士" />
              </li>
              <li><img src="assets/images/fire-role_02.svg" alt="炎舞者" /></li>
              <li>
                <img src="assets/images/fire-role_03.svg" alt="紅蓮法師" />
              </li>
            </ul>
            <ul id="land">
              <li>
                <img src="assets/images/land-role_01.svg" alt="大地勇者" />
              </li>
              <li>
                <img src="assets/images/land-role_02.svg" alt="森林弓箭手" />
              </li>
              <li>
                <img src="assets/images/land-role_03.svg" alt="木之法師" />
              </li>
            </ul>
            <ul id="water">
              <li>
                <img src="assets/images/water-role_01.svg" alt="酷寒戰士" />
              </li>
              <li>
                <img src="assets/images/water-role_02.svg" alt="水行俠" />
              </li>
              <li>
                <img src="assets/images/water-role_03.svg" alt="水之法師" />
              </li>
            </ul>
          </main>
          <ul className="role-board__select">
            <li className="active" data-role="fire">
              <img src="assets/images/select-fire.svg" alt="火屬性角色" />
            </li>
            <li data-role="land">
              <img src="assets/images/select-land.svg" alt="木屬性角色" />
            </li>
            <li data-role="water">
              <img src="assets/images/select-water.svg" alt="水屬性角色" />
            </li>
          </ul>
        </section> --> */}
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Role;
