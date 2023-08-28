import React from 'react';
import ReactPaginate from 'react-paginate';
import style from "./Pagination.module.scss"

const Pagination = ({currentPage, onChange}) => {
    return (
        <ReactPaginate className={style.root}
                       breakLabel="..."
                       nextLabel=">"
                       previousLabel="<"
                       onPageChange={(event) => onChange(event.selected + 1)}
                       pageCount={4}
                       forcePage={currentPage - 1}
        />
    );
};

export default Pagination;