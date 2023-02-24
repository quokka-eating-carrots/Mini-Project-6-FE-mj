import { useEffect, useState } from 'react';
import { getUserInfo, UserInfoType } from '../api/axios';

export default function useUserInfo() {
  const [user, setUser] = useState<UserInfoType | null>(null);
  useEffect(() => {
    async function fetchData() {
      const { ok, userInfoData } = await getUserInfo();
      if (ok) {
        setUser(userInfoData);
      }
    }
    fetchData();
  }, []);

  return user;
}
