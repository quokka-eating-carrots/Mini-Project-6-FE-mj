import { ScrollRestoration, Outlet } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div className='w-[375px] m-auto mb-[150px]'>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <MenuBar />
    </div>
  );
}

export default App;
