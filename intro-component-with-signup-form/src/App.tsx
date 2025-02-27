import './App.css';
import { Title } from './components/Title';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <main className='bg-Red h-[1000px]'>
        <article className={`flex flex-col justify-between items-center h-full px-6 pt-[88px] pb-[68px] text-white font-Poppins bg-[url(/public/images/bg-intro-mobile.png)]`}>
          <Title />
          <Form />
        </article>
      </main>
    </>
  );
}

export default App;