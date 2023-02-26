import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getKeywordSearch } from '../../api/axios';
import ListBox from '../../components/MainPage/ListBox';
import { CategoryData } from '../../api/axios';
import Pagination from 'react-js-pagination';
import '../../assets/paging.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../../utils/toasstify';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<Array<CategoryData>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalItem, setTotalItem] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const location = useLocation();
  const pathname = location.pathname.slice(8);
  const keyword = decodeURIComponent(pathname);

  useEffect(() => {
    const fetchData = async () => {
      const { ok, searchData } = await getKeywordSearch(keyword, page);
      setSearchResult(searchData.content);
      setTotalItem(searchData.totalElements);
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
      <h1 className='text-center font-bold text-[24px]'>
        검색 결과: {keyword}
      </h1>
      {searchResult.length > 0 ? (
        <>
          {searchResult.map((item) => {
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
        </>
      ) : (
        <div className='text-center'>검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default SearchPage;
