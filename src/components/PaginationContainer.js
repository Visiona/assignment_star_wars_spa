import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pagination from './Pagination'
import {getResourcesData, setPage} from '../actions'

class PaginationContainer extends Component {


  render() {

    const {currentPage, count} = this.props
    debugger
  return (
    <Pagination currentPage={currentPage}
                totalPages={count}
                onChangePage={this.props.onChangePage}
    />
  )

}
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePage: (i) => {
      // e.preventDefault();
      dispatch(getResourcesData('people', '', i))
      dispatch(setPage(i))
    }
  }
}



export default connect(mapStateToProps,
                        mapDispatchToProps)(PaginationContainer)
