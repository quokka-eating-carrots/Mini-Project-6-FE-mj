import { CartType } from '../../api/axios';

type CartItemProps = {
  onClick: () => void;
  info: CartType;
};

export default function CartItem({ onClick, info }: CartItemProps) {
  return (
    <div className='relative w-full h-[200px] flex justify-between items-center px-[32px]'>
      <button
        onClick={onClick}
        className='absolute top-8 right-8 text-[#2AC1BC] text-3 font-bold'
      >
        X
      </button>
      <div>
        <div className='text--black-100  text-[13px] bg-[#FFD770] rounded-[16px] h-5 w-[60px] flex items-center justify-center'>
          장바구니
        </div>
        <div className='text-[20px] font-medium text--black-90'>
          {info.loanName}
        </div>
        <div className='flex justify-start items-center'>
          {info.loanTarget.map((target) => {
            return <div className='text-[#828F9C] text-[13px]'>#{target}</div>;
          })}
        </div>
      </div>
      <div className='flex flex-col justify-center items-end'>
        <div className='-text--black-50  text-[13px]'>
          {info.baseRate === '-' ? '변동금리' : info.baseRate}
        </div>
        <div className=' text-mw  text-[20px] font-semibold'>
          {info.rate === '-' ? '5%' : info.rate}
        </div>
      </div>
    </div>
  );
}
