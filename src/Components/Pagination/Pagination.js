import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductList } from '../../Actions/app';

const Pagination = () => {

  const dispatch = useDispatch(),
        appProps = useSelector(store => store.app),
        nextUrl = appProps.productData?.next,
        prevUrl = appProps.productData?.previous,
        [currentPage, setCurrentPage] = useState(1);

  const _prevPage = () => {
    dispatch(getProductList(prevUrl));
    setCurrentPage(currentPage => currentPage - 1);
  }

  const _nextPage = () => {
    dispatch(getProductList(nextUrl));
    setCurrentPage(currentPage => currentPage + 1);
  }

  return (
    <div className="pagination">
      {
        prevUrl !== null && currentPage > 0 &&
        <span title="Previous page" className="pagination__direction" onClick={ () => _prevPage() }><i className="fas fa-chevron-left"></i></span>
      }
      <span className="pagination__content">Page { currentPage }</span>
      {

        nextUrl !== null &&
        <span title="Next page" className="pagination__direction" onClick={ () => _nextPage() }><i className="fas fa-chevron-right"></i></span>
      }
    </div>
  );

}

export default Pagination;