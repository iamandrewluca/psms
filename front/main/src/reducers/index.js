import {FETCH_PROVIDERS_SUCCESS, FETCH_VIDEOS_SUCCESS, SIGN_UP_CONSUMER_SUCCESS, TOGGLE_SIGN_UP_MODAL} from "../actions"
import {getProvidersBy} from "../utils/getProvidersBy"

const initialState = {
  apiToken: localStorage.getItem('api_token'),
  providers: null,
  countries: null,
  networks: null,
  videos: null,
  signUpModal: false,
  authorizeModal: false,
}

export function app(state = initialState, action) {
  switch (action.type) {

    case FETCH_VIDEOS_SUCCESS:
      return Object.assign({}, state, {videos: action.videos})

    case FETCH_PROVIDERS_SUCCESS:
      const providers = action.providers
      const countries = getProvidersBy(providers, 'mcc')
      const networks = getProvidersBy(providers, 'id')
      return Object.assign({}, state, {
        providers,
        countries,
        networks,
      })

    case SIGN_UP_CONSUMER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return Object.assign({}, state, {
        signUpModal: false,
        authorizeModal: true,
      })

    case TOGGLE_SIGN_UP_MODAL:
      return Object.assign({}, state, {signUpModal: action.isOpen})

    default:
      return state
  }
}
