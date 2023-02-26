import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router';

const LoanBox = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/userloan/123')}
      className='shadow-default rounded-default bg-white w-full h-[100px] flex flex-col px-5 relative justify-center cursor-pointer mx-[60px]'
    >
      <span className='text-mw font-bold text-[18px]'>
        중소기업취업청년대출
      </span>
      <span className='text-[18px] font-bold text-mw-dGray'>
        &#8361; 68,000,000
      </span>
      <div>
        <span className='text-[14px] font-bold text-mw-dGray'>대출 만기일</span>{' '}
        <span className='text-mw-dGray text-[14px]'>2024. 02. 14</span>
      </div>
      <MdKeyboardArrowRight className='absolute right-[15px] text-mw text-[24px]' />
    </div>
  );
};

export default LoanBox;
