import React from 'react';
import PropTypes from 'prop-types';

PaginationBtn.propTypes = {
    totalRows: PropTypes.number,
    PageState: PropTypes.object,
    handlePagination: PropTypes.func,

};
PaginationBtn.defaultProps = {
    totalRows: PropTypes.number,
    PageState: PropTypes.object,
    handlePagination: PropTypes.func,
}

function PaginationBtn(props) {
    const { totalRows, PageState, handlePagination } = props
    const totalPages = Math.ceil(totalRows / PageState._limit)
        return(
            <div>
                <button
                    disabled={PageState._page <= 1}
                    onClick={()=>handlePagination(-1)}
                >
                    prev
                </button>
                <button
                    disabled={PageState._page >= totalPages}
                    onClick={()=>handlePagination(1)}
                >
                    next
                </button>
            </div>
        );
}

export default PaginationBtn;