import React from "react";

const Pagination = ({ pagesTotal, onClick, currentPage }) => {
  const buildPagination = () => {
    let pageItems = [];

    const paginationPattern = i => {
      return (
        <li
          className={`pagination__item ${
            currentPage === i ? "pagination__item__active" : ""
          }`}
          data-count={i}
          onClick={onClick}
          key={i}
        >
          {i}
        </li>
      );
    };

    for (let i = 1; i <= pagesTotal; i++) {
      pageItems.push(paginationPattern(i));
    }

    return pageItems;
  };

  return <ul className="pagination">{buildPagination()}</ul>;
};

export default Pagination;
