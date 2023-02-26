import meewang3 from '../../assets/meewang3.png';

const NotFound = () => {
  return (
    <div>
      <div className='font-bold text-lg text-alert w-full text-center'>
        잘못된 접근이에요!
      </div>
      <img src={meewang3} />
    </div>
  );
};
export default NotFound;
