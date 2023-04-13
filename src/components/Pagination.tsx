import React from 'react'
import ReactPaginate from 'react-paginate';
type PaginationProps = {
  onChangePage: (page:number)=> void;
  
  
}
const Pagination: React.FC<PaginationProps> = ({ onChangePage}) => {
  // const pageCount = parseInt(count / meta.limit, 10);
  return  <ReactPaginate
  className='pagination'
  breakLabel="..."
  nextLabel=">"
  onPageChange={(event)=> onChangePage(event.selected + 1)}
  pageCount={2}
  previousLabel="<"
  renderOnZeroPageCount={null}
  pageRangeDisplayed={5}
/>
}

export default Pagination