import './App.css';
import { Title } from './components/Title';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <main className='bg-Red h-[1000px] lg:h-screen'>
        <article className={`grid place-content-center lg:grid-cols-2 gap-[65px] lg:gap-[45px] h-full px-6 pt-[88px] pb-[68px] lg:px-[165px] lg:py-[161px] text-white font-Poppins bg-[url(/public/images/bg-intro-mobile.png)] lg:bg-[url(/public/images/bg-intro-desktop.png)] `}>
          <Title />
          <Form />
        </article>
      </main>
    </>
  );
}

export default App;