import {FETCH_PROVIDERS_SUCCESS, FETCH_VIDEOS_SUCCESS, TOGGLE_MODAL} from "../actions"
import {getProvidersBy} from "../utils/getProvidersBy"

const initialState = {
  apiToken: localStorage.getItem('api_token'),
  providers: null,
  countries: null,
  networks: null,
  videos: null,
  signInModal: false,
}

export function app(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return Object.assign({}, state, {videos: action.videos})
    case FETCH_PROVIDERS_SUCCESS:
      const providers = action.providers
      const countries = getProvidersBy(providers, 'mcc')
      const networks = getProvidersBy(providers, 'mnc')
      return Object.assign({}, state, {
        providers,
        countries,
        networks,
      })
    case TOGGLE_MODAL:
      return Object.assign({}, state, {signInModal: action.isOpen})
    default:
      return state
  }
}
