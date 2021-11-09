import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Skill() {
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
            <span className='container__sub'>競賽辦法</span>角色技能
          </h1>
          <img
            src='/images/role-show.svg'
            className='margin-bottom'
            alt='主動技能'
          />
        </main>
      </article>
      <Footer />
    </>
  );
}
export default Skill;
