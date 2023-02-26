import logo from '../../assets/008.png';
import CartList from '../../components/CartNLikePage/CarList';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { autoCheck } from '../../features/authSlice';
import useUserInfo from '../../hooks/useUserInfo';

const CartNLikesPage = () => {
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  const user = useUserInfo();

  return isLogin ? (
    <div className='relative'>
      <img
        src={logo}
        alt='로고 이미지'
        className='opacity-[0.2] absolute top-0 right-0 w-[227px] h-[191px]'
      />
      <div className='mt-5 text-center text-[30px] font-bold'>
        <span className='text-mw'>{user?.name}</span>님 상품몰 장바구니
      </div>
      <CartList />
    </div>
  ) : (
    <Navigate to='/signin'></Navigate>
  );
};

export default CartNLikesPage;
