import React from 'react';

type Props = {};

const AccountHistory = (props: Props) => {
  return (
    <div className='px-[20px] my-5'>
      <span>2023년 2월 14일</span>
      <br />
      <span className='text-mw mb-5'>이자 납입</span>
      <div className='flex flex-col my-2 gap-2'>
        <div className='flex w-full flex-row'>
          <span className='text-[18px] font-semibold basis-1/2'>거래 원금</span>
          <span className='text-[18px] basis-1/2 text-right'>0원</span>
        </div>
        <div className='flex w-full flex-row'>
          <span className='text-[18px] font-semibold basis-1/2'>정상 이자</span>
          <span className='text-[18px] basis-1/2 text-right'>30,000원</span>
        </div>
        <div className='flex w-full flex-row'>
          <span className='text-[18px] font-semibold basis-1/2'>연체 이자</span>
          <span className='text-[18px] basis-1/2 text-right'>0원</span>
        </div>
        <div className='flex w-full flex-row'>
          <span className='text-[18px] font-semibold basis-1/2'>대출 잔액</span>
          <span className='text-[18px] basis-1/2 text-right'>68,000,000원</span>
        </div>
      </div>
      <hr className='my-7' />
    </div>
  );
};

export default AccountHistory;
