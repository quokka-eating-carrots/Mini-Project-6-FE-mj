import React from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import Header from './components/Header';
import MenuBar2 from './components/MenuBar2';

function App() {
  return (
    <div className='w-[375px] m-auto'>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <MenuBar2 />
    </div>
  );
}

export default App;
