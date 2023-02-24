import React from 'react';
import loading1 from '../../assets/loading/loading1.svg';
import loading2 from '../../assets/loading/loading2.svg';
import loading3 from '../../assets/loading/loading3.svg';
import loading4 from '../../assets/loading/loading4.svg';

type Props = {};

const Loading = (props: Props) => {
  return (
    <div
      className='absolute top-0 left-0 flex flex-col justify-center items-center h-screen w-screen bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url('./src/assets/loading/loading-bg.png')` }}
    >
      <h1 className='text-[64px] font-bold'>Loading !</h1>
      <div className='flex justify-center items-center w-screen'>
        <img
          className='animate-loading1 h-[150px]'
          src={loading1}
          alt='loading'
        />
        <img
          className='animate-loading2 h-[150px]'
          src={loading2}
          alt='loading'
        />
        <img
          className='animate-loading3 h-[150px]'
          src={loading3}
          alt='loading'
        />
        <img
          className='animate-loading4 h-[150px]'
          src={loading4}
          alt='loading'
        />
      </div>
    </div>
  );
};

export default Loading;
