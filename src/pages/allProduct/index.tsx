import { useState, useEffect } from 'react';
import ListBox from '../../components/MainPage/ListBox';
import { CategoryData, getAllList } from '../../api/axios';
import Pagination from 'react-js-pagination';
import '../../assets/paging.css';
import { notify } from '../../utils/toasstify';
import { ToastContainer } from 'react-toastify';

const allProduct = () => {
  const [lists, setlists] = useState<Array<CategoryData>>([]);
  const [page, setpage] = useState(1);
  const handlePageChange = (page: number) => {
    setpage(page);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllList(page);
      setlists(res.allData);
    };
    fetchData();
  }, [page]);
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
      <div>
        {lists.map((item, i) => (
          <ListBox
            key={i}
            snq={item.snq}
            title={item.loanName}
            desc={item.loanDescription}
            target={item.loanTarget}
            baseRate={item.baseRate}
            notify={notify}
          />
        ))}
      </div>
      <div>
        <Pagination
          activePage={page} // 현재 페이지
          itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
          totalItemsCount={840} // 총 아이템 갯수
          pageRangeDisplayed={5} // paginator의 페이지 범위
          prevPageText={'‹'} // "이전"을 나타낼 텍스트
          nextPageText={'›'} // "다음"을 나타낼 텍스트
          onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
      </div>
    </div>
  );
};

export default allProduct;
