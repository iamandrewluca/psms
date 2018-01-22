import {SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS} from "../actions"

const token = localStorage.getItem('api_token')
const initialState = {
  apiToken: token,
  isAuthenticated: !!token,
  loading: false,
}

export function app(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return Object.assign({}, state, { loading: true })
    case SIGN_IN_FAILURE:
      return Object.assign({}, state, { loading: false })
    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, { isAuthenticated: true })
    default:
      return state
  }
}
