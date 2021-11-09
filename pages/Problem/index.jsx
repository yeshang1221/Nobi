import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import React, { useEffect, useState } from 'react';
import ProblemList from '../../components/ProblemList';
import { data } from '../../components/ProblemList/data';
function Problem() {
  const [problemList, setProblemList] = useState([]);
  useEffect(() => {
    const questionItems = document.querySelectorAll('#question-list>li');

    questionItems.forEach((element) => {
      const elementHeight = element.clientHeight;
      const elementToggle = element.querySelector('.question-list__title');
      const contentHeight = element.querySelector(
        '.question-list__content',
      ).clientHeight;
      const titleHeight = elementHeight - contentHeight;

      element.classList.add('active');
      element.style.height = `${elementHeight}px`;

      elementToggle.addEventListener('click', () => {
        element.classList.value === 'active'
          ? (element.style.height = `${titleHeight}px`)
          : (element.style.height = `${elementHeight}px`);
        element.classList.toggle('active');
      });
    });
    //資料傳入
    // setProblemList(data);
  }, []);
  //常見問題展開收合(初始預設為全部展開)
  //展開高度
  console.log(problemList, '123');
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
            <span className='container__sub'>FAQ</span>常見問題
          </h1>
          <h2 className='container__caption'>點選消息展開詳細資訊</h2>

          <ul id='question-list' className='question-list'>
            {/* <ProblemList problemList={problemList} /> */}
            <li>
              <span className='question-list__title'>我要如何進入遊戲？</span>
              <span className='question-list__content'>
                可透過登入親師生平台，從平台上進入遊戲網站，詳細登入方式可參考
                <a
                  href='https://pts.ntpc.edu.tw/doc/manual.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  親師生平台操作手冊
                </a>
                。
              </span>
            </li>
            <li>
              <span className='question-list__title'>
                我想要參加遊戲，但我沒有親師生平台帳號。
              </span>
              <span className='question-list__content'>
                110年度新北市健康識能競賽，首度登錄新北市親師生平台，將優先開放予擁有親師生平台帳號之師生或家長，家長帳號申請方式可參考
                <a
                  href='https://pts.ntpc.edu.tw/doc/manual.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  親師生平台操作手冊
                </a>
                。
              </span>
            </li>
            <li>
              <span className='question-list__title'>
                個人戰與團體戰的差別在哪裡？
              </span>
              <span className='question-list__content'>
                個人戰開放時間為111年1月10日至4月24日，具有新北市親師生平台之會員，不限年齡與性別皆可參與；團體戰開放時間為111年2月14日至4月28日，僅開放給就讀本市國小之4年級至6年級在學學生組隊參與。
              </span>
            </li>
            <li>
              <span className='question-list__title'>
                個人戰要如何參加抽獎？
              </span>
              <span className='question-list__content'>
                於活動時間集齊16瓶解藥（16顆類型星球的3個關卡都挑戰成功），即可獲得抽獎資格。
              </span>
            </li>
            <li>
              <span className='question-list__title'>
                校園初賽要如何參加抽獎？
              </span>
              <span className='question-list__content'>
                於初賽期間隊伍遊戲次數達30次，所以隊員（含候補隊員）皆有抽獎資格喔！
              </span>
            </li>
            <li>
              <span className='question-list__title'>
                我要如何參加積點趣活動？
              </span>
              <span className='question-list__content'>
                於個人戰開放時間，可透過登入遊戲、完成遊戲、蒐集成就解藥等方式累計親師生平台學習積點，毎人於遊戲期間最多可獲得715點遊戲積點，每10點遊戲積點可透過兌換300點會員點數，點等值新台幣1元，可於全家便利超商APP換購品項。積點方式可參考詳細兌換流程可參考
                <a
                  href='https://nevent.family.com.tw/fami_learningpoints/'
                  target='_blank'
                  rel='noreferrer'
                >
                  全家兌點說明
                </a>
                。
              </span>
            </li>
          </ul>
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Problem;
