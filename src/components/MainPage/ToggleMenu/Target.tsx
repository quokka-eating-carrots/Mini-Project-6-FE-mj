import { targetList } from '../../../utils/infoData';
import { useNavigate } from 'react-router';

type props = {
  toggleMenu: () => void;
};

const Target = ({ toggleMenu }: props) => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-2 w-[230px] gap-3'>
      {targetList.map((list) => {
        return (
          <div
            key={list}
            className='cursor-pointer  hover:text-mw hover:font-bold'
            onClick={() => {
              toggleMenu();
              navigate(`/category/target&${list}`);
            }}
          >
            {list}
          </div>
        );
      })}
    </div>
  );
};

export default Target;
