import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ToggleHeader from './MainPage/ToggleMenu/ToggleHeader';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setisOpen((isOpen) => !isOpen);
  };

  return (
    <div className='flex relative m-auto h-[100px] w-[375px] items-center justify-center'>
      <div
        className='inset-x-0 top-0 text-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <span className='text-mw font-bold text-[20px]'>MW </span>
        <span className='--black-100 text-[20px]'>Loan</span>
      </div>
      <button
        className='absolute right-2 top-[50%] translate-y-[-50%]'
        onClick={() => toggleMenu()}
      >
        <AiOutlineMenu size='28' />
      </button>
      <div
        className={
          isOpen
            ? 'showMenu w-[375px] h-screen absolute top-0 left-[0px] z-[1000] duration-500 opacity-1'
            : 'hideMenu w-[375px] h-screen absolute top-0 left-[375px] z-[1000] duration-500 opacity-0 pointer-events-none'
        }
      >
        <ToggleHeader toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
