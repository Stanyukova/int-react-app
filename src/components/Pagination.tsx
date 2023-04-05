import React from 'react'
import ReactPaginate from 'react-paginate';
type PaginationProps = {
  onChangePage: (page:number)=> void;
  
}
const Pagination: React.FC<PaginationProps> = ({ onChangePage}) => {
  
  return  <ReactPaginate
  className='pagination'
  breakLabel="..."
  nextLabel=">"
  onPageChange={(event)=> onChangePage(event.selected + 1)}
  pageRangeDisplayed={7}
  pageCount={2}
  previousLabel="<"
  renderOnZeroPageCount={null}
/>
}

export default Pagination