import React from 'react'

const Pagination = ({currentPage, totalPages, onChangePage}) => {

  let listPages=[];

  for(let i=1; i<=parseInt(totalPages, 10); i++) {
    if (i === parseInt(currentPage, 10)) {
      listPages.push(<li className='active page-item' key={i}><a className='page-link' onClick={(e) => onChangePage(e, i)} >{i}</a></li>)
    } else {
      listPages.push(<li className='page-item' key={i}><a className='page-link' onClick={(e) => onChangePage(e, i)} >{i}</a></li>)
    }
  }

  return (
    <div className=''>
      <ul className="pagination justify-content-center">
        {listPages}
      </ul>
    </div>
  )
}


export default Pagination
