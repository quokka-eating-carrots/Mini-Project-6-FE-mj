import React, { useState } from 'react';
import Agency from './Agency';
import Location from './Location';
import Using from './Using';
import Target from './Target';

type props = {
  toggleMenu: () => void;
};

const lists = ['기관', '지역', '용도', '직업'];

const ToggleBody = ({ toggleMenu }: props) => {
  const [activeMenu, setactiveMenu] = useState(0);
  return (
    <div className='absolute top-[240px] w-full bg-white text-black'>
      <div className='flex'>
        <ul className='my-2 w-[100px] h-[200px] flex flex-col justify-center items-center text-center gap-3 px-2'>
          {lists.map((list, i) => {
            return (
              <li
                key={i}
                className={
                  i === activeMenu
                    ? 'transition ease-in-out delay-50 w-[90px] h-[63px] ml-2 font-bold text-lg text-mw-lGray bg-mw rounded-[15px] flex justify-center items-center cursor-pointer'
                    : 'w-[90px] h-[63px] ml-2 font-bold text-lg text-mw flex justify-center items-center cursor-pointer'
                }
                onClick={() => setactiveMenu(i)}
              >
                {list}
              </li>
            );
          })}
        </ul>
        <div className='ml-7 mt-4 flex flex-col'>
          {
            [
              <Agency toggleMenu={toggleMenu} />,
              <Location toggleMenu={toggleMenu} />,
              <Using toggleMenu={toggleMenu} />,
              <Target toggleMenu={toggleMenu} />,
            ][activeMenu]
          }
        </div>
      </div>
    </div>
  );
};

export default ToggleBody;
