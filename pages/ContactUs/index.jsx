import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function ContactUs() {
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
            <span className='container__sub'>Contact Us</span>聯絡我們
          </h1>
          <h2 className='container__caption'>我們將盡快與您回覆</h2>

          <img
            src='/images/contact-us.png'
            className='margin-bottom'
            alt='聯絡我們相關資訊'
          />
        </main>
      </article>
      <Footer />
    </>
  );
}
export default ContactUs;
