import React, { useState } from 'react';
import AccountDetail from '../../components/UserLoan/AccountDetail';
import AccountHistory from '../../components/UserLoan/AccountHistory';

type Props = {};

const UserLoanPage = (props: Props) => {
  const [menuChange, setMenuChange] = useState(false);
  const activeClassName = () => {
    return 'cursor-pointer text-mw font-bold border-solid border-mw border-b-4 text-[18px]';
  };
  const defaultClassName = () => {
    return 'cursor-pointer text-mw-gray font-bold text-[18px]';
  };

  const accountHistory = () => (
    <>
      <AccountHistory />
      <AccountHistory />
    </>
  );

  const accountDetail = () => <AccountDetail />;
  return (
    <div className='w-full'>
      <div className='h-[390px] bg-mw flex flex-col justify-center items-center rounded-b-[50px]'>
        <span className='font-bold text-white text-[24px] mt-10'>
          중소기업취업청년전월세보증금대출
        </span>
        <span className='font-bold text-white text-[20px] mt-7 mb-3'>
          123-456-789-10
        </span>
        <div className='flex gap-2'>
          <span className='font-bold text-white'>만기일자</span>
          <span className='text-white'>2024.08.08</span>
        </div>
        <button className='mwBtn-white !h-[30px] mt-[50px]'>이자 납입</button>
      </div>
      <div className='flex gap-24 justify-center my-10'>
        <h3
          onClick={() => setMenuChange(false)}
          className={!menuChange ? activeClassName() : defaultClassName()}
        >
          거래 내역
        </h3>
        <h3
          onClick={() => setMenuChange(true)}
          className={menuChange ? activeClassName() : defaultClassName()}
        >
          계좌 상세
        </h3>
      </div>
      {menuChange ? accountDetail() : accountHistory()}
    </div>
  );
};

export default UserLoanPage;
