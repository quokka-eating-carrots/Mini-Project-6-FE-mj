import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (page: string, state: boolean) => {
  if (state) {
    const success = toast.success(`${page}에 추가하였습니다.`);
    console.log('성공');
    return success;
  } else {
    const fail = toast.warn('상품을 담을 수 없습니다.');
    console.log('실패');
    return fail;
  }
};
