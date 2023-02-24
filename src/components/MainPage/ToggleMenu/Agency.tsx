import React from 'react';
import { agencyList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';
type props = {
  toggleMenu: () => void;
};

const Agency = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-2 gap-2 w-[230px] gap-3'>
      {agencyList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointer hover:text-mw hover:font-bold'
            onClick={() => {
              toggleMenu();
              navigate(`/category/office&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Agency;
