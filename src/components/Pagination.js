import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({currentPage, totalPages, onChangePage}) => {

  let listPages=[];

  for(let i=1; i<=parseInt(totalPages); i++) {
    debugger
    if (i === parseInt(currentPage)) {
      listPages.push(
        <Link to={onChangePage(i)} className="active">{i}</Link>)
    } else {
      listPages.push(<Link to={onChangePage(i)} className="">{i}</Link>)
    }
  }

  return (
  <nav aria-label="Page navigation">
    <ul className="pagination">
      {listPages}

    </ul>
  </nav>
  )
}


export default Pagination
