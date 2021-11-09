import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Competition() {
  // useEffect(() => {
  //   const modalItems = document.querySelectorAll('.modal-trigger');
  //   // console.log(modalItems, 'item');
  //   const modal = (element, triggerName) => {
  //     let modalContainer = document.getElementById(triggerName);
  //     // console.log(modalContainer, 'container');
  //     element.addEventListener('click', () => {
  //       // console.log(element, 'ele');
  //       // console.log(modalContainer, 'con');
  //       modalContainer.classList.add('active');
  //     });
  //     modalContainer.addEventListener('click', () => {
  //       modalContainer.classList.remove('active');
  //     });
  //   };

  //   // console.log(modalItems, 'two');
  //   modalItems.forEach((element, index) => {
  //     modal(element, element.dataset.target);
  //   });
  // }, []);
  //"尚未開放畫面"點擊img彈出視窗
  const [competitionClick, setCompetitionClick] = useState(false);
  const modal = 'modal';
  const modalActive = 'modal active';
  return (
    <>
      <blockquote className='body-background body-background--page'></blockquote>
      <NavBar />
      <header className='header'></header>
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
            <span className='container__sub'>Online competition</span>網路競賽
          </h1>
          <h2 className='container__caption'>即刻展開冒險旅程吧！</h2>

          <img
            className='midden-size modal-trigger'
            src='/images/game-enter.svg'
            data-target='loader'
            alt='點擊進入遊戲'
            onClick={() => {
              setCompetitionClick(!competitionClick);
            }}
          />
        </main>
      </article>
      <Footer />
      <article
        id='loader'
        className={competitionClick ? modalActive : modal}
        onClick={() => {
          setCompetitionClick(!competitionClick);
        }}
      >
        <div className='loader'>
          <div className='loader__outer'></div>
          <div className='loader__middle'></div>
          <div className='loader__inner'></div>
        </div>
        <h3 className='modal__overlay-title'>
          系統升級中，預計111年1月10日開賽
        </h3>
      </article>
    </>
  );
}
export default Competition;
