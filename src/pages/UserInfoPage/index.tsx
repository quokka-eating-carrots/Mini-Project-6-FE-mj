import React, { useState } from 'react';
import UserDetail from '../../components/UserInfoPage/UserDetail';
import UserInfo from '../../components/UserInfoPage/UserInfo';

type Props = {};

const UserInfoPage = (props: Props) => {
  const [menuChange, setMenuChange] = useState(false);

  const activeClassName = () => {
    return 'cursor-pointer text-mw font-bold border-solid border-mw border-b-4';
  };
  const defaultClassName = () => {
    return 'cursor-pointer text-mw-gray font-bold hover:text-mw hover:border-b-4 hover:border-mw';
  };
  return (
    <div>
      <div className='flex gap-16 justify-center'>
        <h2
          onClick={() => setMenuChange(false)}
          className={!menuChange ? activeClassName() : defaultClassName()}
        >
          비밀번호 변경
        </h2>
        <h2
          onClick={() => setMenuChange(true)}
          className={menuChange ? activeClassName() : defaultClassName()}
        >
          맞춤 정보 변경
        </h2>
      </div>
      {!menuChange ? <UserInfo /> : <UserDetail />}
    </div>
  );
};

export default UserInfoPage;
