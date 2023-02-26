import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  age,
  banks,
  jobs,
  regions,
  crdtGrade,
  income,
} from '../../utils/infoData';
import InfoSelect from '../../components/InfoSelect';
import {
  changeUserDetailInfo,
  getUserDetailInfo,
  UserDetailInfoType,
} from '../../api/axios';
import { FieldValues, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetail = () => {
  const [userDetailInfoData, setUserDetailInfoData] =
    useState<UserDetailInfoType>({
      age: '나이',
      bank: '주거래 은행',
      crdtGrade: '신용점수',
      address: '거주지',
      income: '수입 연봉',
      job: '수입 형태',
    });

  useEffect(() => {
    async function fetchData() {
      const { ok, userDetailInfoData } = await getUserDetailInfo();
      setUserDetailInfoData(userDetailInfoData);
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
    const { job, age, address, bank, crdtGrade, income } = data;
    const { ok, userDetailInfoData } = await changeUserDetailInfo(
      age,
      address,
      job,
      bank,
      crdtGrade,
      income,
    );

    if (ok) {
      notify();
      setTimeout(() => navigate('/mypage'), 2000);
    }
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className='w-[300px] m-auto'>
      <ToastContainer />
      {userDetailInfoData ? (
        <form
          className='flex-col text-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='font-semibold mt-8'>수입 형태</h3>
          <InfoSelect
            infos={jobs}
            defaultValue={userDetailInfoData.job}
            type='job'
            register={register}
          />
          <h3 className='font-semibold'>나이</h3>
          <InfoSelect
            infos={age}
            defaultValue={userDetailInfoData.age}
            type='age'
            register={register}
          />
          <h3 className='font-semibold'>거주지</h3>
          <InfoSelect
            infos={regions}
            defaultValue={userDetailInfoData.address}
            type='address'
            register={register}
          />
          <h3 className='font-semibold'>주거래 은행</h3>
          <InfoSelect
            infos={banks}
            defaultValue={userDetailInfoData.bank}
            type='bank'
            register={register}
          />
          <h3 className='font-semibold'>신용점수</h3>
          <InfoSelect
            infos={crdtGrade}
            defaultValue={userDetailInfoData.crdtGrade}
            type='crdtGrade'
            register={register}
          />
          <h3 className='font-semibold'>수입 연봉</h3>
          <InfoSelect
            infos={income}
            defaultValue={userDetailInfoData.income}
            type='income'
            register={register}
          />
          <button className='mwBtn !w-[300px] font-semibold mt-12'>변경</button>
        </form>
      ) : (
        <form
          className='flex-col text-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className='font-semibold mt-8'>수입 형태</h3>
          <InfoSelect
            infos={jobs}
            defaultValue={'수입 형태'}
            type='job'
            register={register}
          />
          <h3 className='font-semibold'>나이</h3>
          <InfoSelect
            infos={age}
            defaultValue={'나이'}
            type='age'
            register={register}
          />
          <h3 className='font-semibold'>거주지</h3>
          <InfoSelect
            infos={regions}
            defaultValue={'거주지'}
            type='address'
            register={register}
          />
          <h3 className='font-semibold'>주거래 은행</h3>
          <InfoSelect
            infos={banks}
            defaultValue={'주거래 은행'}
            type='bank'
            register={register}
          />
          <h3 className='font-semibold'>신용점수</h3>
          <InfoSelect
            infos={crdtGrade}
            defaultValue={'신용점수'}
            type='crdtGrade'
            register={register}
          />
          <h3 className='font-semibold'>수입 연봉</h3>
          <InfoSelect
            infos={income}
            defaultValue={'수입 연봉'}
            type='income'
            register={register}
          />
          <button className='mwBtn !w-[300px] font-semibold mt-12'>변경</button>
        </form>
      )}
    </div>
  );
};

export default UserDetail;
