import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ListBox from './ListBox';
import { getProduct, ProductList } from '../../api/axios';
type props = {
  notify: (page: string, state: boolean) => void;
};

const GoodsList = ({ notify }: props) => {
  const [lists, setlists] = useState<ProductList>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const productList = await getProduct();
      setlists(productList);
    }
    fetchData();
  }, []);
  return (
    <div className='w-full mt-5'>
      <button
        onClick={() => navigate('/allproduct')}
        className='flex cursor-pointer'
      >
        <span className='text-[20px] font-semibold'>전체 상품</span>
        <MdKeyboardArrowRight size='28' />
      </button>
      {lists?.productData?.map((item, index) => (
        <ListBox
          key={index}
          snq={item.snq}
          title={item.loanName}
          desc={item.loanDescription}
          target={item.loanTarget}
          baseRate={item.rate}
          notify={notify}
        />
      ))}
    </div>
  );
};

export default GoodsList;
