import React, {Component} from 'react'
import {connect} from 'react-redux'
import Pagination from './Pagination'
import {getResourcesData, setPage} from '../actions'
import {getUrlName} from '../helpers'

class PaginationContainer extends Component {


  render() {

    const {currentPage, count} = this.props
    return (
      <Pagination currentPage={currentPage}
                  totalPages={count}
                  onChangePage={this.props.onChangePage}
      />
    )

  }
}

const mapStateToProps = (state, props) => {
  return {
    count: state.count,
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangePage: (e, i) => {
      e.preventDefault();
      dispatch(getResourcesData(getUrlName(e.target.baseURI), '', i))
      dispatch(setPage(i))
    }
  }
}



export default connect(mapStateToProps,
                        mapDispatchToProps)(PaginationContainer)
