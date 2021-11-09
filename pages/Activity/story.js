import React from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Story() {
  return (
    <>
      <blockquote className='body-background body-background--page'></blockquote>
      <NavBar />
      <header className='header'></header>
      <article className='container'>
        <main className='container__main'>
          <div className='board-background'>
            <span className='board-background__label board-background__label--title'>
              一封來自未來的訊息⋯⋯
            </span>
            <span className='board-background__top'></span>
            <span className='board-background__bottom'></span>
            <span className='board-background__left'></span>
            <span className='board-background__right'></span>
          </div>
          <h1 className='container__title container__title--right'>
            <span className='container__sub'>活動緣起</span>背景故事
          </h1>

          <section className='margin-bottom text--big'>
            我是來自西元2060年的科學家海爾斯（Health），若您讀到這封信，請您務必仔細閱讀，這將會影響全人類的命運⋯⋯
            <br />
            我所在的年代，全世界的自然資源逐漸消耗殆盡，大地與空氣的污染，導致人類的免疫力開始下降，大規模的傳染病不斷，曾經最適合人類居住的星球，已經逐漸邁向滅亡的命運。
            <br />
            但我們透過衛星發現，在遙遠銀河系外的星球，有著可以解救地球的解藥，似乎是更高科技的外星民族忘記帶走的禮物，有孕育生命的氧氣、灌溉大地的泉水、以及創造能量的陽光等等，有了這些解藥，我們將可延續地球的生命！要取得解藥必須通過一連串的太空考驗，然後，能源已經所剩不多了⋯⋯
            我們需要具有強大的勇氣和智慧的人選，為我們打贏這場保衛地球的戰爭，於是我們決定將這個任務，交付給過去還在健康的地球上生存的人類。
            <br />
            現在，讀著這封信的你，將有機會化身健康戰士拯救地球，若你自認具備上述的條件，我們誠摯地邀請你加入健康特攻隊的行列，並透過太空訓練的考驗，增強自己的能力，到16顆星球尋得解藥，並跟著自己的夥伴，一同踏上這趟太空征戰之旅，齊心協力打敗各種怪獸，最終期待你們將健康的生活帶回地球的懷抱！
          </section>
          <img src='/images/message-image.svg' alt='解藥列表圖片' />
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Story;
