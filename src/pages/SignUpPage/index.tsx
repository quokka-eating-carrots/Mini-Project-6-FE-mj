import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signUp } from '../../api/axios';
import { useAppDispatch } from '../../app/hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IvalidationForm = {
  name: string;
  password: string;
  email: string;
  phone: string;
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(5, '최대 길이는 5글자 입니다')
      .matches(/^[가-힣]+$/, '이름은 한글로만 입력해주세요')
      .required('이름을 입력해주세요'),
    password: yup
      .string()
      .min(8, '비밀번호는 8자 이상 16자로 설정해주세요')
      .max(16, '비밀번호는 8자 이상 16자로 설정해주세요')
      .matches(
        /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
        '숫자 혹은 문자로만 구성되어야 합니다',
      )
      .required('비밀번호를 입력해주세요'),
    email: yup
      .string()
      .email('이메일 형식에 맞추어 입력해주세요')
      .required('이메일 형식에 맞추어 입력해주세요'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/i, '번호는 01012345678형태로 입력해주세요')
      .required('휴대폰 번호를 입력해주세요'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IvalidationForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    const { email, password, name, phone } = data;
    const { ok, signData } = await signUp(name, password, email, phone);
    if (ok) {
      const notify = () => toast.success(signData);
      notify();
      navigate('/signin');
    } else {
      const notify = () => toast.warn(signData);
      notify();
    }
  };
  return (
    <section className='w-[300px] m-auto'>
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
      <h1 className='text-4xl font-bold text-center'>반가워요</h1>
      <p className='text-center mt-4 mw-lGray'>
        가입에 꼭 필요한 정보를 알려주세요
        <br />
        금방 끝나요!😉
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex-col mt-16 text-center'
      >
        <div>
          <label htmlFor='text'>이메일</label>
          <input
            type='text'
            className='mwInput pl-6 w-full text-sm'
            placeholder='이메일 형식에 맞게 입력하세요'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='password'>비밀번호</label>
          <input
            type='password'
            className='mwInput pl-6 w-full text-sm'
            placeholder='8자 이상 16자의 숫자 혹은 문자로 설정하세요'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='name'>이름</label>
          <input
            type='text'
            className='mwInput pl-6 w-full text-sm'
            placeholder='이름을 입력해주세요'
            {...register('name')}
          />
          {errors.name && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className='mt-8'>
          <label htmlFor='phone'>핸드폰 번호</label>
          <input
            type='text'
            className='mwInput pl-6 w-full text-sm'
            placeholder=' - 을 제외한 11자리를 입력해주세요 '
            {...register('phone')}
          />
          {errors.phone && (
            <p className='text-xs text-alert pt-3 text-left ml-5'>
              {errors.phone.message}
            </p>
          )}
        </div>
        <button type='submit' className='mwBtn !w-[300px] font-semibold mt-12'>
          회원가입 하기
        </button>
      </form>
      <p className='mt-12 text-center'>
        이미 회원이신가요?
        <button
          onClick={() => {
            navigate('/signin');
          }}
          className='font-bold text-mw'
        >
          &nbsp;로그인 하기
        </button>
      </p>
    </section>
  );
};

export default SignUpPage;
