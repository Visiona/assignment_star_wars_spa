import * as Actions from './actions'
import {getResourceId} from './helpers'

const initialState = {
  name: '',
  resourcesData: [],
  resourceName: '',
  count: '',
  currentPage: '',
  isFetching: false,
  error: null
}

export function resourcesGetter(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RESOURCES_REQUEST:
    case Actions.SEARCH_REQUEST:
      return {
        ...state,
        count: '',
        isFetching: true,
        error: null,
      }
    case Actions.GET_RESOURCES_SUCCESS:
    case Actions.SEARCH_SUCCESS:
      return {
        resourcesData: action.data.results,
        count: Math.ceil(action.data.count/10),
        currentPage: !action.data.previous ? 1  : parseInt(getResourceId(action.data.previous),10) + 1,
        isFetching: false,
        error: null,
      }
    case Actions.GET_RESOURCES_FAILURE:
    case Actions.SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        count: '',
        error: action.data,
      }
    case Actions.SET_PAGE:
      return {
        ...state,
        currentPage: action.data,
        isFetching: false
      }
    default:
      return state
  }
}
