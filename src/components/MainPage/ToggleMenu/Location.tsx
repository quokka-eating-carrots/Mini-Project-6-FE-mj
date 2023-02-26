import { locationList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';

type props = {
  toggleMenu: () => void;
};

const Location = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-3 gap-2 w-[230px]'>
      {locationList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointer  hover:text-mw hover:font-bold'
            onClick={() => {
              toggleMenu();
              navigate(`/category/area&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Location;
