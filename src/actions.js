export const GET_RESOURCES_REQUEST = 'GET_RESOURCES_REQUEST'
export const GET_RESOURCES_SUCCESS = 'GET_RESOURCES_SUCCESS'
export const GET_RESOURCES_FAILURE = 'GET_RESOURCES_FAILURE'
export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'
export const SET_PAGE = 'SET_PAGE'

export function getResourcesRequest () {
  return {
    type: GET_RESOURCES_REQUEST
  }
}

export function getResourcesSuccess (data) {
  return {
    type: GET_RESOURCES_SUCCESS,
    data: data
  }
}

export function getResourcesFailure (error) {
  return {
    type: GET_RESOURCES_FAILURE,
    error
  }
}

export function getSearchRequest () {
  return {
    type: SEARCH_REQUEST
  }
}

export function getSearchSuccess (data) {
  return {
    type: SEARCH_SUCCESS,
    data: data
  }
}

export function getSearchFailure (error) {
  return {
    type: SEARCH_FAILURE,
    error
  }
}

export function setPage (data) {
  return {
    type: SET_PAGE,
    data: data
  }
}

// remove vehicles name !!!!!!!
export function getResourcesData(name='people', showId='', page = '1') {

  let slash = showId ? '/' : ''
  let pageQuery = '?page=' + page
  return(dispatch) => {
    dispatch(getResourcesRequest())
    fetch('https://swapi.co/api/' + name + slash + showId + pageQuery)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        dispatch(getResourcesSuccess(json))
      })
      .catch((error) => {
        dispatch(getResourcesFailure(error))
      })
  }
}

export function getSearchData() {

}
