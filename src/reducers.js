import * as Actions from './actions'

const initialState = {
  name: '',
  resourcesData: [],
  isFetching: false,
  error: null
}

export function resourcesGetter(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RESOURCES_REQUEST:
    case Actions.SEARCH_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: null,
    }
    case Actions.GET_RESOURCES_SUCCESS:
    case Actions.SEARCH_SUCCESS:
    return {
      resourcesData: action.data.results,
      isFetching: false,
      error: null,
    }
    case Actions.GET_RESOURCES_FAILURE:
    case Actions.SEARCH_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.data,
    }
    default:
      return state
  }
}
