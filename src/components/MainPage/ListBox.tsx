/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { IoBookmarksOutline, IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { addCartList, addFavor } from '../../api/axios';
import useAddCart from '../../hooks/useAddCart';
type props = {
  snq: string | number;
  title: string;
  desc: string;
  target: string | string[];
  baseRate: string;
  notify: (page: string, state: boolean) => void;
};
const ListBox = (props: props) => {
  let description = props.desc;
  let replaceDesc = description.replace('<br/>/g', '');
  const navigate = useNavigate();

  const addCart = useAddCart();

  const favorHandler = async () => {
    const { ok } = await addFavor(props.snq);
    if (ok) {
      props.notify('관심 상품', ok);
    } else {
      props.notify('관심 상품', ok);
    }
  };

  const cartHandler = async () => {
    try {
      await addCart(String(props.snq));
      props.notify('장바구니', true);
    } catch {
      props.notify('장바구니', false);
    }
  };

  return (
    <div className='bg-mw-lGray relative w-full h-52 my-3 shadow-default rounded-default'>
      <div className='flex flex-col gap-1 justify-center m-5 py-5'>
        <span
          className='cursor-pointer font-bold text-[20px] mb-3 truncate'
          onClick={() => navigate(`/product/${props.snq}`)}
        >
          {props.title}
        </span>
        <span className='text-xs'>{replaceDesc.slice(0, 80)}...</span>
        <div className='flex gap-2 truncate'>
          <span className='truncate'>
            대상:{' '}
            {props.target.length > 1
              ? `${props.target[0]}, ${props.target[1]}...`
              : props.target[0]}
          </span>
          {' | '}
          <span className=''>
            금리: {props.baseRate !== 'null' ? props.baseRate : '은행별 상이'}
          </span>
        </div>
      </div>
      <div className='flex absolute right-5 bottom-5 gap-2 items-center'>
        <IoCartOutline
          className='text-[28px] cursor-pointer'
          onClick={cartHandler}
        />
        <IoBookmarksOutline
          className='text-[24px] cursor-pointer'
          onClick={favorHandler}
        />
        <button
          className='mwBtn !w-[80px] !h-[40px]'
          onClick={() => navigate(`/product/${props.snq}`)}
        >
          상세 보기
        </button>
      </div>
    </div>
  );
};

export default ListBox;
