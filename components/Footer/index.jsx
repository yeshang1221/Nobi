function Footer() {
  return (
    <>
      <footer className='footer'>
        <main className='footer__container'>
          <div className='board-background'>
            <span className='board-background__title'></span>
            <span className='board-background__top'></span>
          </div>
          <section className='footer__logo'>
            <img src='/images/logo_new taipet city.png' alt='新北市政府' />
            <img src='/images/logo_health.png' alt='新北市政府衛生局' />
            <img src='/images/logo_economic.png' alt='新北市政府經發局' />
            <img src='/images/logo_education.png' alt='新北市政府教育局' />
          </section>
          <section className='footer__information'>
            <span>
              聯絡電話： (02)8521-5016. E-mail：healthschool.ntpc@gmail.com
              <br />
              2021本網站為新北市政府版權所有‧未經允許，不得以任何形式複製和採用。
            </span>
          </section>
        </main>
      </footer>
    </>
  );
}
export default Footer;
