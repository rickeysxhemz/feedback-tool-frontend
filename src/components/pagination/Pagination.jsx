import React from "react";

export default function Pagination(props) {

  const { currentPage, setCurrentPage, lastPage } = props
  return (
    <div>
      {/* pagination */}
      <div className=" p-2">
        <span style={{ cursor: 'pointer' }} onClick={() => { currentPage !== 1 && setCurrentPage(currentPage - 1) }}>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          <span className="pl-2" style={{marginRight:'2rem'}}>Previous</span>
        </span>
        <span className="float-right" style={{ cursor: 'pointer' }} onClick={() => { currentPage !== lastPage && setCurrentPage(currentPage + 1) }}>
          <span className="pr-2">Next</span>
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}
