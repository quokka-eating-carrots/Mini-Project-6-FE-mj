import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { deleteCookie } from '../../../utils/cookieFn';
import ToggleBody from './ToggleBody';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction, autoCheck } from '../../../features/authSlice';
import { logOut, getUserInfo, UserInfoType } from '../../../api/axios';
interface props {
  toggleMenu(): void;
}
const ToggleHeader = (props: props) => {
  const [user, setUser] = useState<UserInfoType | null>(null);
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  const date = new Date().toLocaleString('ko-KR');
  useEffect(() => {
    async function fetchData() {
      const { ok, userInfoData } = await getUserInfo();
      if (ok) {
        setUser(userInfoData);
      }
    }
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const logoutHandler = () => {
    deleteCookie('accessToken');
    dispatch(logOutAction());
  };

  const navigate = useNavigate();

  const submitHandler = (keyword: string) => {
    props.toggleMenu();
    navigate(`/search/${keyword}`);
  };

  const onClickDiv = () => {
    navigate('/mypage');
  };
  return isLogin ? (
    <div className='relative w-full h-full z-[1000] bg-mw'>
      <div className='w-full h-[240px] m-auto'>
        <div className='absolute flex justify-end top-[30px] right-0 items-end gap-3'>
          <div className='cursor-pointer'>
            <BiLogOut
              size='32'
              color='#fff'
              onClick={() => {
                logoutHandler(), logOut();
              }}
            />
          </div>{' '}
          <div className='mr-[10px] cursor-pointer'>
            {' '}
            <AiOutlineClose
              size='32'
              color='#fff'
              onClick={() => props.toggleMenu()}
            />
          </div>
        </div>

        <div className='absolute top-[70px] left-[41px] w-[270px] h-[148px] mx-auto '>
          <div
            className='flex gap-5 cursor-pointer'
            onClick={() => {
              props.toggleMenu(), onClickDiv();
            }}
          >
            <div className='w-[70px] h-[70px] rounded-full'>
              <img src='/images/Users.svg' alt='사용자' />
            </div>
            <div className='mt-4 text-sm'>
              <p className='flex text-[20px]'>
                {user?.name} <MdKeyboardArrowRight size='20' />
              </p>
              <p className='text-[10px]'>최근접속 : {date}</p>
            </div>
          </div>
          <div className='mt-[22px] flex items-center'>
            <form onSubmit={() => submitHandler(value)}>
              <label className='relative block'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-5'>
                  {' '}
                  <BsSearch size='28' />{' '}
                </span>
                <input
                  type='text'
                  className='mwInput pl-14 m-auto'
                  placeholder='검색어를 입력해주세요'
                  value={value}
                  onChange={(event) => setValue(event?.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      <ToggleBody toggleMenu={props.toggleMenu} />
    </div>
  ) : (
    <div className='relative w-full h-full z-[1000] bg-mw'>
      <div className='w-full h-[240px] m-auto'>
        {' '}
        <div className='float-right mt-[35px] mr-[10px] cursor-pointer'>
          {' '}
          <AiOutlineClose
            size='32'
            color='#fff'
            onClick={() => props.toggleMenu()}
          />
        </div>
        <div className='absolute top-[70px] left-[41px] w-[270px] h-[148px] mx-auto '>
          <Link to='/signin'>
            <div className='flex gap-5' onClick={() => props.toggleMenu()}>
              <div className='w-[70px] h-[70px] rounded-full'>
                <img src='/images/NeedLogin.svg' alt='사용자' />
              </div>
              <div className='mt-5 text-[20px] text-center text-white'>
                <p>로그인하기</p>
              </div>
            </div>
          </Link>

          <div className='mt-[22px] flex items-center'>
            <form onSubmit={() => submitHandler(value)}>
              <label className='relative block'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-5'>
                  {' '}
                  <BsSearch size='28' />{' '}
                </span>
                <input
                  type='text'
                  className='mwInput pl-14 m-auto'
                  placeholder='검색어를 입력해주세요'
                  value={value}
                  onChange={(event) => setValue(event?.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      <ToggleBody toggleMenu={props.toggleMenu} />
    </div>
  );
};

export default ToggleHeader;
