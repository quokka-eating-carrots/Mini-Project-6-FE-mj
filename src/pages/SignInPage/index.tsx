import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn, ResponseValue } from '../../api/axios';
import { useAppDispatch } from '../../app/hooks';
import { setUser, autoCheck } from '../../features/authSlice';
import { setCookie } from '../../utils/cookieFn';
import { token } from '../../api/core/api';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
type Props = {};

interface IvalidationForm {
  email: string;
  password: string;
}

const SignInPage = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('이메일 형식에 맞추어 입력해주세요')
      .required('이메일 형식에 맞추어 입력해주세요'),
    password: yup
      .string()
      .min(8, '비밀번호는 8자 이상 16자로 설정해주세요')
      .max(16, '비밀번호는 8자 이상 16자로 설정해주세요')
      .matches(
        /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
        '숫자 혹은 문자로만 구성되어야 합니다',
      )
      .required('비밀번호를 입력해주세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    const { ok, signData }: ResponseValue = await signIn(email, password);
    console.log(ok, signData);
    if (ok) {
      setCookie('accessToken', signData?.token!, 1);
      dispatch(setUser(signData));
      location.reload();
      navigate('/');
    }
  };

  return (
    <section className='w-[300px] m-auto'>
      <h1 className='text-6xl font-bold text-center'>안녕하세요</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex-col mt-24 text-center'
      >
        <div>
          <label htmlFor='email'></label>
          <input
            type='text'
            className='mwInput pl-6 text-sm'
            placeholder='이메일을 입력해주세요'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mt-12'>
          <label htmlFor=''></label>
          <input
            type='password'
            className='mwInput pl-6 text-sm'
            placeholder='비밀번호를 입력해주세요'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.password.message}
            </p>
          )}
        </div>
        <button className='mwBtn !w-[300px] font-semibold mt-12'>로그인</button>
      </form>
      <p className='mt-12 text-center'>
        회원이 아니세요?&nbsp;
        <button
          onClick={() => {
            navigate('/signin');
          }}
          className='font-bold text-mw'
        >
          회원가입 하기
        </button>
      </p>
    </section>
  );
};

export default SignInPage;
