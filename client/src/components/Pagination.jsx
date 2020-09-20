import React from 'react';

function Pagination({ productsPerPage, totalProducts, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers && pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button href="#" onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;