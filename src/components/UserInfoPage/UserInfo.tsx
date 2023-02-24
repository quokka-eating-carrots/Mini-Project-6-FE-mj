import React, { useState, useEffect } from 'react';
import {
  getUserInfo,
  UserInfoType,
  changeUserInfo,
  checkUser,
} from '../../api/axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

interface IvalidationForm {
  phone: string;
  password: string;
  newPassword: string;
}

const UserInfo = (props: Props) => {
  const [userInfoData, setUserInfoData] = useState<UserInfoType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { ok, userInfoData } = await getUserInfo();
      setUserInfoData(userInfoData);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();

  const notify = () =>
    toast.success('정보를 수정하였습니다.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const onSubmit = async (data: FieldValues) => {
    const { phone, newPassword, password } = data;
    const { ok } = await checkUser(password).then(() =>
      changeUserInfo(phone, newPassword),
    );
    if (ok) {
      notify();
      setTimeout(() => navigate('/mypage'), 2000);
    }
  };

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .matches(
        /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
        '숫자 혹은 문자로만 구성되어야 합니다',
      )
      .required('비밀번호를 입력해 주세요.'),
    newPassword: yup
      .string()
      .min(8, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .max(16, '8자 이상 16자 이하의 숫자 혹은 문자를 입력해 주세요.')
      .matches(
        /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
        '숫자 혹은 문자로만 구성되어야 합니다',
      )
      .required('비밀번호를 입력해 주세요.'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/i, '번호는 01012345678 형태로 입력해 주세요.')
      .required('전화 번호를 입력해 주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({ resolver: yupResolver(schema) });

  return (
    <div className='w-[300px] m-auto'>
      <form
        className='flex-col mt-8 text-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='phone' className='font-semibold mb-2'>
            전화 번호 변경
          </label>
          <input
            type='text'
            className='mwInput pl-6 w-full'
            placeholder={userInfoData?.phone}
            {...register('phone')}
          />
          {errors.phone && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='password' className='font-semibold mb-2'>
            비밀번호 변경
          </label>
          <input
            type='password'
            className='mwInput pl-6 w-full mb-3'
            placeholder='기존 비밀번호'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.password.message}
            </p>
          )}
          <input
            type='password'
            className='mwInput pl-6 w-full'
            placeholder='새로운 비밀번호'
            {...register('newPassword')}
          />
          {errors.newPassword && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.newPassword.message}
            </p>
          )}
        </div>
        <button type='submit' className='mwBtn !w-[300px] font-semibold mt-12'>
          회원 정보 변경
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default React.memo(UserInfo);
