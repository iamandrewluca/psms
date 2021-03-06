import to from 'await-to-js'
import {RSAA} from "redux-api-middleware"

export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST"
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE"

export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
})

export const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS,
  token,
})

export const signInFailure = () => ({
  type: SIGN_IN_FAILURE,
})

export const signIn = (e) => async (dispatch) => {
  e.preventDefault();
  dispatch(signInRequest())

  let err, response, data

  [err, response] = await to(fetch('/api/v1/admin/signin', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value,
    })
  }))

  if (!response || response.status !== 200) {
    dispatch(signInFailure())
    return;
  }

  [err, data] = await to(response.json())

  if (err) {
    dispatch(signInFailure())
    return
  }

  const token = data['api_token']

  localStorage.setItem('admin-api-token', token)
  dispatch(signInSuccess(token))
}

export const UPDATE_PROVIDERS_REQUEST = "UPDATE_PROVIDERS_REQUEST"
export const UPDATE_PROVIDERS_SUCCESS = "UPDATE_PROVIDERS_SUCCESS"
export const UPDATE_PROVIDERS_FAILURE = "UPDATE_PROVIDERS_FAILURE"

export const updateProviders = () => ({
  [RSAA]: {
    endpoint: '/api/v1/admin/updateProviders',
    method: 'GET',
    headers: {
      'Api-Token': localStorage.getItem('admin-api-token'),
    },
    types: [UPDATE_PROVIDERS_REQUEST, UPDATE_PROVIDERS_SUCCESS, UPDATE_PROVIDERS_FAILURE]
  }
})
