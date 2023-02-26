import { useState, useEffect } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { CategoryData, getCategoryList } from '../../api/axios';
import { useLocation } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../../assets/paging.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../../utils/toasstify';

const CategoryPage = () => {
  const [categoryItem, setCategoryItem] = useState<Array<CategoryData>>([]);
  const [page, setPage] = useState(1);
  const [totalItem, setTotalItem] = useState(0);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const location = useLocation();
  const pathname = location.pathname.slice(10).split('&');
  const category = pathname[0];
  const keyword = decodeURIComponent(pathname[1]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategoryList(category, keyword, page);
      setCategoryItem(res.categoryData.content);
      setTotalItem(res.categoryData.totalElements);
    };
    fetchData();
  }, [keyword, page]);

  return (
    <div>
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
      <h1 className='text-center font-bold text-[24px]'>{keyword}</h1>
      {categoryItem?.map((item) => {
        return (
          <ListBox
            key={item.snq}
            snq={item.snq}
            title={item.loanName}
            desc={item.loanDescription}
            target={item.loanTarget}
            baseRate={item.rate}
            notify={notify}
          />
        );
      })}
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={totalItem}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CategoryPage;
