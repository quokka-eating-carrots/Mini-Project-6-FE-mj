import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CartNLikesPage from './pages/CartNLikesPage';
import MainPage from './pages/MainPage';
import Mypage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import OptionalInfo from './pages/SignInPage/OptionalInfo';
import SignUpPage from './pages/SignUpPage';
import UserInfoPage from './pages/UserInfoPage';
import UserLoanPage from './pages/UserLoanPage';
import './index.css';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signin/optinfo',
        element: <OptionalInfo />,
      },
      {
        path: '/userinfo',
        element: <UserInfoPage />,
      },
      {
        path: '/userloan',
        element: <UserLoanPage />,
      },
      {
        path: '/product/:Id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <CartNLikesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
