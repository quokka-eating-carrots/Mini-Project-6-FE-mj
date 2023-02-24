import React from 'react';

type Props = {};

const AccountDetail = (props: Props) => {
  return (
    <ul className='px-[20px]'>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 종류</span>
        <span className='basis-2/3 text-right'>
          중소기업취업청년 전월세보증금대출
        </span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 계좌 번호</span>
        <span className='basis-2/3 text-right'>123-456-78-910</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>취급일</span>
        <span className='basis-2/3 text-right'>2022년 8월 8일</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>만기일</span>
        <span className='basis-2/3 text-right'>2024년 8월 8일</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 금액</span>
        <span className='basis-2/3 text-right'>68,000,000</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 잔액</span>
        <span className='basis-2/3 text-right'>68,000,000</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>
          이체지정일(주기)
        </span>
        <span className='basis-2/3 text-right'>15일(1개월)</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>
          다음 이자 납입일
        </span>
        <span className='basis-2/3 text-right'>2023년 3월 15일</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>대출 이율</span>
        <span className='basis-2/3 text-right'>1.2%</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>연체 여부</span>
        <span className='basis-2/3 text-right'>정상</span>
      </li>
      <li className='flex w-full flex-row items-center my-3'>
        <span className='basis-1/3 font-bold text-[18px]'>고객명</span>
        <span className='basis-2/3 text-right'>미왕이</span>
      </li>
    </ul>
  );
};

export default AccountDetail;
