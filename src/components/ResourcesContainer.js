import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getResourceId,
        getParams} from '../helpers'
import {getResourcesData} from '../actions'


class ResourcesContainer extends Component {

  componentDidMount() {
     this.props.getResources(this.props.path)
   }
   
  const resourceCard = resources.map((el) => (
    <div className='resourceCard' key={el.name}>
      <Link to={`${resources}/${getResourceId(el.url)}`}>
        {el.name}
      </Link>
    </div>
  ))

  return (
    <div className='row'>
      <div className='thumbnail'>
        {resourceCard}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResourcesData: (resources) => {
      dispatch(getResourcesData(resources))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // const currentResource = getParams(ownProps.location.search).resource
  return {
    resources: state.resourcesData
  }
}

export default connect(mapStateToProps)(ResourcesContainer)
