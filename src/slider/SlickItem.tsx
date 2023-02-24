import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type SlickItemProps = {
  key: number;
  item: {
    snq: string;
    loanName: string;
    loanDescription: string;
  };
};

function SlickItem({ key, item }: SlickItemProps) {
  const navigate = useNavigate();
  const navigateToProduct = useCallback(() => {
    navigate(`/product/${item.snq}`);
  }, [item]);
  return (
    <div className='flex flex-col items-center justify-center mt-[40px] ml-[20px]'>
      <div onClick={navigateToProduct}>
        <div className='w-[260px] h-[50px] align-middle text-[15px]'>
          <p>{item.loanName}</p>
        </div>
        <div className='w-[280px] h-[100px] text-[14px] whitespace-normal overflow-hidden'>
          <p>{item.loanDescription.slice(0, 80)}</p>
        </div>
      </div>
    </div>
  );
}

export default SlickItem;
