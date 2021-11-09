import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import React, { useEffect } from 'react';
function Prizes() {
  useEffect(() => {
    const tabContainer = (containerName) => {
      const tabContent = document.getElementsByClassName(`${containerName}`)[0];
      const tabs = tabContent.querySelectorAll(`.${containerName}__tabs>li`);
      const pages = tabContent.querySelectorAll(
        `.${containerName}__pages>section`,
      );

      tabs[0].classList.add('active');
      pages[0].classList.add('active');

      tabs.forEach((element, index) => {
        element.addEventListener('click', () => {
          tabs.forEach((element) => element.classList.remove('active'));
          pages.forEach((element) => element.classList.remove('active'));
          element.classList.add('active');
          pages[index].classList.add('active');
        });
      });
    };

    tabContainer('tab-container');
  }, []);
  return (
    <>
      <blockquote className='body-background body-background--page'></blockquote>
      <NavBar />
      <header className='header'></header>
      <article className='container'>
        <main className='container__main'>
          <div className='board-background'>
            <span className='board-background__label board-background__label--title'></span>
            <span className='board-background__top'></span>
            <span className='board-background__bottom'></span>
            <span className='board-background__left'></span>
            <span className='board-background__right'></span>
          </div>

          <h1 className='container__title container__title--right'>
            <span className='container__sub'>競賽辦法</span>活動好康
          </h1>
          <article className='tab-container'>
            <ul className='tab-container__tabs'>
              <li>積點趣兌換</li>
              <li>好禮大獎抽</li>
            </ul>
            <main className='tab-container__pages'>
              <section>
                <img src='/images/prizes-point.png' alt='獎品點數說明' />
              </section>
              <section>
                <img
                  src='/images/prize-items.svg'
                  className='margin-bottom'
                  alt='prize-items'
                />
                <ul className='image-list'>
                  <li>
                    <img
                      src='/images/prize-images_01.png'
                      alt='羅際 G502 無線電競滑鼠'
                    />
                  </li>
                  <li>
                    <img
                      src='/images/prize-images_02.png'
                      alt='Apple iPad Air(64G)'
                    />
                  </li>
                  <li>
                    <img
                      src='/images/prize-images_03.png'
                      alt='廣穎 口袋型行動電源'
                    />
                  </li>
                  <li>
                    <img
                      src='/images/prize-images_04.png'
                      alt='Acer 曲面全高清電競螢幕'
                    />
                  </li>
                </ul>
              </section>
            </main>
          </article>
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Prizes;
