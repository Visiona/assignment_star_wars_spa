import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getResourceId,
        getResourceName} from '../helpers'
import {getResourcesData} from '../actions'



class ResourcesContainer extends Component {

  componentDidMount() {
     this.props.getResourcesData(this.props.resourceName)
   }

   componentWillUpdate(nextState) {
     if (getResourceName(nextState.location.pathname) !== this.props.resourceName)
      this.props.getResourcesData(nextState.resourceName)
    }

   render() {
     const {resourcesData, resourceName} = this.props

     const resourceCard = resourcesData.map((el) => (
       <div className='list-group-item list-group-item-action justify-content-center' key={el.name}>
          <h4><Link to={`${resourceName}/${getResourceId(el.url)}`}>
          {el.name}
         </Link></h4>
       </div>
     ))

     return (
       <div className='list-group'>
          {resourceCard}
       </div>
     )


   }
}

const mapStateToProps = (state, props) => {
  return {
    resourcesData: state.resourcesData,
    resourceName: getResourceName(props.location.pathname)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResourcesData: (resourceName) => {
      dispatch(getResourcesData(resourceName))
    }
  }
}



export default connect(mapStateToProps,
                        mapDispatchToProps)(ResourcesContainer)
