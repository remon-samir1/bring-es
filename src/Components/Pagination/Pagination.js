import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './Pagination.css'
export default function Pagination({ setPage  , itemsPerPage , total}) {
const pageCount = total / itemsPerPage
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(e)=>setPage(e.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName='custom-pagination'
        pageLinkClassName='custom-pagination-link'
        activeLinkClassName='custom-pagination-link-active'
        previousLinkClassName='custom-pagination-previous'
        nextLinkClassName='custom-pagination-next'
      />
    </>
  );
}
