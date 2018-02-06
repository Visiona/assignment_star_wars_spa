import * as Actions from './actions'

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
    debugger
      return {
        resourcesData: action.data.results,
        count: Math.ceil(action.data.count/10),
        currentPage: 1,
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
        currentPage: action.data
      }
    default:
      return state
  }
}
