import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];
    const len = Math.ceil(totalItems / itemsPerPage)
    for (let i = 1; i <= len; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav style={{marginLeft:'430px'}}>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination