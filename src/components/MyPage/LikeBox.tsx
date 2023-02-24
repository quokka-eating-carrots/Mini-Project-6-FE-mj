import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FavorType, deleteFavor } from '../../api/axios';

type Props = {
  item: FavorType;
  handler: () => void;
};

const LikeBox = ({ item, handler }: Props) => {
  const navigate = useNavigate();
  const deleteBtnHandler = () => {
    deleteFavor(item.snq);
    handler();
  };

  return (
    <div className='m-auto w-[180px] h-[250px] bg-mw rounded-default shadow-default text-white p-5'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <span className='font-bold text-center truncate w-full text-[18px]'>
          {item.loanName}
        </span>
        <span className='font-bold text-center text-[14px]'>
          {item.loanLimit.split('원')[0]} 원
        </span>
        <div>
          <div className='flex items-center gap-2'>
            <span className='text-[14px] font-bold whitespace-nowrap'>
              금리
            </span>
            <span className='text-[12px]'>{item.rate.slice(0, 9)}...</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[14px] font-bold whitespace-nowrap'>
              대상
            </span>
            <span className='text-[12px]'>
              {item.loanTarget[0].slice(0, 6)}...
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[14px] font-bold whitespace-nowrap'>
              취급 기관
            </span>
            <span className='text-[12px] truncate'>
              {item.provider.slice(0, 6)}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-5 items-center'>
        <button
          className='mwBtn-white !w-[100px] !h-[30px] !text-[12px]'
          onClick={() => navigate(`/product/${item.snq}`)}
        >
          자세히 보기
        </button>
        <button
          className='mwBtn-white !w-[100px] !h-[30px] !text-[12px]'
          onClick={deleteBtnHandler}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default LikeBox;
