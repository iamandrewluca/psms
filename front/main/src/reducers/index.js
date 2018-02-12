import {
  COUNTRY_SELECTED, FETCH_PROVIDERS_SUCCESS, FETCH_VIDEOS_SUCCESS, RECHECK_STATUS_SUCCESS, SIGN_UP_CONSUMER_SUCCESS,
  TOGGLE_SIGN_UP_MODAL
} from "../actions"
import {getProvidersBy} from "../utils/getProvidersBy"

const initialState = {
  apiToken: localStorage.getItem('api_token'),
  user: null,
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
      const networks = providers
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
        user: action.payload.user,
        apiToken: action.payload.token,
      })

    case RECHECK_STATUS_SUCCESS:
      return Object.assign({}, state, {
        authorizeModal: !action.payload.validated,
        user: { ...action.payload },
      })

    case TOGGLE_SIGN_UP_MODAL:
      return Object.assign({}, state, {signUpModal: action.isOpen})

    case COUNTRY_SELECTED:
      const showNetworks = state.providers
        .filter(provider => provider.mcc === action.payload.target.value)
      return Object.assign({}, state, {networks: showNetworks})

    default:
      return state
  }
}
