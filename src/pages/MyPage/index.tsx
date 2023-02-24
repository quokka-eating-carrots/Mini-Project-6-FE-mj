import React, { useState, useEffect } from 'react';
import LoanBox from '../../components/MyPage/LoanBox';
import Slider from 'react-slick';
import LikeBox from '../../components/MyPage/LikeBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { getFavor, getUserInfo, UserInfoType } from '../../api/axios';
import { FavorType } from '../../api/axios';
import { IoBookmarksOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { autoCheck } from '../../features/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

const Mypage = (props: Props) => {
  const [favor, setFavor] = useState<Array<FavorType>>([]);
  const [user, setUser] = useState<UserInfoType | null>(null);
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { favorData } = await getFavor();
      const { ok, userInfoData } = await getUserInfo();
      if (ok) {
        setFavor(favorData);
        setUser(userInfoData);
      }
    }
    fetchData();
  }, []);

  const settings = {
    dots: true,
    slidesToShow: 1,
    arrows: false,
  };

  const notify = () => toast.success('관심 상품이 삭제되었습니다.');
  const deleteBtnHandler = () => {
    notify();
    setTimeout(() => location.reload(), 1000);
  };

  return isLogin ? (
    <div className='mx-[30px]'>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <h1 className='text-[20px]'>
        <span className='text-mw font-bold'>{user?.name}</span> 님 안녕하세요!
      </h1>
      <div className='mt-[20px]'>
        <span className='text-[16px]'>이용 중인 대출 3건</span>
        <div className='flex gap-5 flex-col items-center'>
          <LoanBox />
          <LoanBox />
          <button className='mwBtn !h-[30px] !text-[14px]'>더 보기</button>
        </div>
      </div>
      <div>
        <h2 className='text-[20px] font-bold my-[20px] flex'>
          관심 상품 <IoBookmarksOutline className='text-[24px] ml-2' />
        </h2>
        {favor.length ? (
          <Slider {...settings} dotsClass='mypage-dots' className='likeItem'>
            {favor.map((item) => (
              <LikeBox item={item} key={item.snq} handler={deleteBtnHandler} />
            ))}
          </Slider>
        ) : (
          <div className='p-5 text-center'>관심 상품이 없습니다.</div>
        )}
      </div>
      <div>
        <h2 className='text-[20px] font-bold mt-[40px] mb-[10px]'>
          회원 정보 수정
        </h2>
        <span
          onClick={() => navigate('/userinfo/pwcheck')}
          className='cursor-pointer'
        >
          비밀번호 | 맞춤 정보 변경
        </span>
      </div>
    </div>
  ) : (
    <Navigate to='/signin'></Navigate>
  );
};

export default Mypage;
