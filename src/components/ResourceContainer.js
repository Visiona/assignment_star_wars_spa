import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getResourceId,
        getResourceName} from '../helpers'
import {getResourcesData} from '../actions'
import Resource from './Resource'




class ResourceContainer extends Component {

  componentDidMount() {
    this.props.getResourcesData('people', '1', '')
    debugger
  }

  componentDidUpdate(prevProps, prevState) {
   if (getResourceName(prevProps.resourceName) !== this.props.resourceName)
    this.props.getResourcesData(this.props.resourceName, '1')
  }


   render() {
     const {resourcesData} = this.props

     return (
       <div className='list-group'>
          <Resource showData={resourcesData}/>
       </div>
     )


   }
}

const mapStateToProps = (state) => {

  return {
    resourcesData: state.resourcesData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResourcesData: (data) => {
      dispatch(getResourcesData(data))
    }
  }
}


export default connect(mapStateToProps,
                        mapDispatchToProps)(ResourceContainer)
