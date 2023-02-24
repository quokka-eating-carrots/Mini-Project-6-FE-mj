import React, { useState } from 'react';
import {
  IoBookmarksOutline,
  IoCartOutline,
  IoHomeOutline,
  IoPersonCircleOutline,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[350px] h-[80px] bg-white shadow-default rounded-[40px] flex justify-center items-center gap-5 fixed bottom-[30px] !z-50 left-[12px]'>
      <div
        onClick={() => navigate('/')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoHomeOutline className='text-[30px]' />
        <span className='text-[14px]'>홈</span>
      </div>
      <div
        onClick={() => navigate('/mypage')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoBookmarksOutline className='text-[28px]' />
        <span className='text-[14px]'>관심 상품</span>
      </div>
      <div
        onClick={() => navigate('/cart')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoCartOutline className='text-[30px]' />
        <span className='text-[14px]'>장바구니</span>
      </div>
      <div
        onClick={() => navigate('/mypage')}
        className='flex flex-col items-center cursor-pointer'
      >
        <IoPersonCircleOutline className='text-[30px]' />
        <span className='text-[14px]'>마이 페이지</span>
      </div>
    </div>
  );
};

export default MenuBar;
