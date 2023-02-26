import GoodsList from '../../components/MainPage/GoodsList';
import RecommendList from '../../components/MainPage/RecommendList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../../utils/toasstify';

const MainPage = () => {
  return (
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
      <RecommendList />
      <GoodsList notify={notify} />
    </div>
  );
};

export default MainPage;
