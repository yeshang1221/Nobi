import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Personal() {
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
            <span className='container__sub'>競賽辦法</span>個人戰
          </h1>
          <img
            src='/images/personal-competition-process.svg'
            className='margin-bottom'
            alt='個人比賽流程圖'
          />
          <section className='margin-bottom'>
            <ol className='container__list'>
              <li>
                參賽資格：具有新北市親師生平台之會員，不限年齡與性別皆可參與。
              </li>
              <li>個帳號每日可玩3次，每次至多20題。</li>
              <li>
                玩家可於遊戲時間依親師生帳號進入遊戲，遊戲時間暫訂於111年1月10日至4月24日。
              </li>
              <li>
                在遊戲選單時選擇題目類型與難易度，進入後選擇3個角色並開始遊戲。
              </li>
              <li>題目類型包含食品安全、健康促進、菸害防制、傳染病防治、</li>
              <li>慢性病防治、合理就醫、病人安全、、化妝品安全、心理衛生、</li>
              <li>
                緊急救護、動健康、毒品危害防制、長期照顧、藥品安全、時事題與綜合題型，共16大類。
              </li>
              <li>
                遊戲進行中每回合可由所有角色之中選擇一個角色進行攻擊或治癒。
              </li>
              <li>
                與電腦競賽答題速度，且遊戲難度將影響獲得積分，難度越高血量越多、回答問題速度越快。
              </li>
            </ol>
            各關卡模式請參考下表：
          </section>

          <img
            src='/images/personal-checkpoint.svg'
            className='small-size margin-bottom'
            alt='關卡列表'
          />
          <section className='margin-bottom'>
            比賽結束條件：
            <br />
            戰勝魔王：魔王血量歸0 或 20回合結束後隊伍總血量≧魔王血量。
            <br />
            戰敗魔王：隊伍血量歸0 或 20回合結束後隊伍總血量＜魔王血量。
            <br />
            宇宙碎片轉盤：成功戰勝魔王後，可觸發宇宙碎片轉盤，隨機獲得1~3枚碎片，可用於培養角色。
            <br />
            探索成就：於16顆星球中，每過完一個星球中的三個關卡，即可獲得解藥；獲取完16顆星球後可至探索成就頁面啟動調製解藥按鈕，即可獲得【個人賽大獎抽】抽獎資格。
            <br />
            各角色特性介紹：
          </section>

          <img
            src='/images/personal-role.svg'
            className='small-size'
            alt='角色列表'
          />
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Personal;
