import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Preliminary() {
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
            <span className='container__sub'>競賽辦法</span>國小版初賽
          </h1>
          <img
            src='/images/preliminary-competition-process.svg'
            className='margin-bottom'
            alt='個人比賽流程圖'
          />
          <section className='margin-bottom'>
            <ol className='container__list'>
              <li>
                參賽資格：就讀本市國小之4年級至6年級學生，3人一組（可多報名一位備選選手），同校組隊競賽，可跨班、跨年級。
              </li>
              <li>遊戲時間暫訂於111年2月14。</li>
              <li>
                隊伍進行遊戲前，須由指導老師登入遊戲開放玩家遊戲權限後，方可創建遊戲房間。
              </li>
              <li>採積分模式(跟電腦對戰)</li>
              <li>
                初賽競賽規則：
                <ol>
                  <li>
                    每隊每日可玩3次，每次至多20題，依魔王血量決定答題次數。
                  </li>
                  <li>
                    參與遊戲之3名隊員，須建立遊戲大廳，待人數到齊，始可進入遊戲。
                  </li>
                  <li>
                    每次進入遊戲選角時，可根據戰術運用選擇不同角色攻擊，每個角色因屬性不同於血量、技能中有
                    所差異。
                  </li>
                </ol>
              </li>
              <li>
                積分模式：
                <ol>
                  <li>
                    初賽中僅可選擇積分模式，在遊戲選單時由第一位進入遊戲房間之玩家選擇難易度（Easy、
                    Normal、Hard），進入選擇角色頁面後才由三位玩家各自選擇角色。
                  </li>
                  <li>
                    遊戲中每一回合答題只由其中一位玩家控制，EX：第一題由1號玩家控制角色攻擊或防禦以及答
                    題，第二題則2號玩家控制。
                  </li>
                  <li>
                    遊戲進行中每回合當下的控制者可由所有角色之中選擇一個角色攻擊、治癒或特殊技能。
                  </li>
                  <li>
                    積分模式須與電腦競賽答題速度，且遊戲難易程度將影響獲得積分，難度越高血量越多、回答
                    題速度越快。
                  </li>
                </ol>
              </li>
            </ol>
            <br />
            各關卡模式請參考下表：
          </section>

          <img
            src='/images/preliminary-checkpoint.svg'
            className='small-size margin-bottom'
            alt='關卡列表'
          />
          <section className='margin-bottom'>
            <ol className='container__list'>
              <li>
                1.積分算法
                <ol>
                  <li>
                    1.擊敗魔王(魔王血量歸0)：(保底積數+隊員剩餘血量)x運氣轉盤
                  </li>
                  <li>
                    2.戰勝魔王(遊戲結束後隊伍血量≧魔王血量)：保底積數+隊員剩餘血量
                  </li>
                  <li>
                    3.戰敗魔王(隊伍血量歸0
                    或遊戲結束後隊伍血量＜魔王血量)：保底積數
                  </li>
                </ol>
              </li>
              <li>2.各關卡保底積分請參考下表：</li>
            </ol>
          </section>

          <img
            src='/images/preliminary-boss.svg'
            className='small-size'
            alt='角色列表'
          />
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Preliminary;
