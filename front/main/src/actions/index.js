import to from 'await-to-js'

export const FETCH_PROVIDERS_REQUEST = "FETCH_PROVIDERS_REQUEST"
export const FETCH_PROVIDERS_SUCCESS = "FETCH_PROVIDERS_SUCCESS"
export const FETCH_PROVIDERS_FAILURE = "FETCH_PROVIDERS_FAILURE"

export const fetchProvidersRequest = () => ({
  type: FETCH_PROVIDERS_REQUEST,
})

export const fetchProvidersSuccess = (providers) => ({
  type: FETCH_PROVIDERS_SUCCESS,
  providers,
})

export const fetchProvidersFailure = () => ({
  type: FETCH_PROVIDERS_FAILURE,
})

export const fetchProviders = () => async (dispatch) => {
  dispatch(fetchProvidersRequest())

  let err, response, providers;

  [err, response] = await to(fetch("/api/v1/consumer/providers"))

  if (!response || response.status !== 200) {
    dispatch(fetchProvidersFailure())
    return
  }

  [err, providers] = await to(response.json());

  if (err) {
    dispatch(fetchProvidersFailure())
    return
  }

  dispatch(fetchProvidersSuccess(providers))
}

export const FETCH_VIDEOS_REQUEST = "FETCH_VIDEOS_REQUEST"
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS"
export const FETCH_VIDEOS_FAILURE = "FETCH_VIDEOS_FAILURE"

export const fetchVideosRequest = () => ({
  type: FETCH_VIDEOS_REQUEST,
})

export const fetchVideosSuccess = (videos) => ({
  type: FETCH_VIDEOS_SUCCESS,
  videos,
})

export const fetchVideosFailure = () => ({
  type: FETCH_VIDEOS_FAILURE,
})

export const fetchVideos = () => async (dispatch) => {
  dispatch(fetchVideosRequest())

  let err, response, videos;

  [err, response] = await to(fetch('/api/v1/consumer/videos'));

  if (!response || response.status !== 200) {
    dispatch(fetchVideosFailure())
    return
  }

  [err, videos] = await to(response.json());

  if (err) {
    dispatch(fetchVideosFailure())
    return
  }

  dispatch(fetchVideosSuccess(videos))
}

export const TOGGLE_SIGN_UP_MODAL = "TOGGLE_SIGN_UP_MODAL"
export const toggleModal = (isOpen) => ({
  type: TOGGLE_SIGN_UP_MODAL,
  isOpen,
})


export const SIGN_UP_CONSUMER_REQUEST = "SIGN_UP_CONSUMER_REQUEST"
export const SIGN_UP_CONSUMER_SUCCESS = "SIGN_UP_CONSUMER_SUCCESS"
export const SIGN_UP_CONSUMER_FAILURE = "SIGN_UP_CONSUMER_FAILURE"

export const signUpConsumerRequest = () => ({
  type: SIGN_UP_CONSUMER_REQUEST,
})

export const signUpConsumerSuccess = (response) => ({
  type: SIGN_UP_CONSUMER_SUCCESS,
  payload: response,
})

export const signUpConsumerFailure = () => ({
  type: SIGN_UP_CONSUMER_FAILURE,
})

export const signUpConsumer = (e) => async (dispatch) => {
  e.preventDefault()

  dispatch(signUpConsumerRequest())

  let err, response, data

  [err, response] = await to(fetch('/api/v1/consumer/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mcc: e.target.mcc.value,
      mnc: e.target.mnc.value,
      number: e.target.number.value,
    }),
  }))

  if (err || response.status !== 200) {
    return dispatch(signUpConsumerFailure())
  }

  [err, data] = await to(response.json())

  return dispatch(signUpConsumerSuccess(data))
}

export const COUNTRY_SELECTED = "COUNTRY_SELECTED"
export const countrySelected = (data) => ({
  type: COUNTRY_SELECTED,
  payload: data
})


export const RECHECK_STATUS_REQUEST = "RECHECK_STATUS_REQUEST"
export const RECHECK_STATUS_SUCCESS = "RECHECK_STATUS_SUCCESS"
export const RECHECK_STATUS_FAILURE = "RECHECK_STATUS_FAILURE"


export const recheckStatusRequest = () => ({
  type: RECHECK_STATUS_REQUEST,
})

export const recheckStatusSuccess = (response) => ({
  type: RECHECK_STATUS_SUCCESS,
  payload: response,
})

export const recheckStatusFailure = () => ({
  type: RECHECK_STATUS_FAILURE,
})

export const recheckStatus = (e) => async (dispatch, getState) => {
  e.preventDefault()

  dispatch(recheckStatusRequest())

  const state = getState()
  console.log(state)

  let err, response, data

  [err, response] = await to(fetch('/api/v1/consumer/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: state.app.apiToken,
    }),
  }))

  if (err || response.status !== 200) {
    return dispatch(recheckStatusFailure())
  }

  [err, data] = await to(response.json())

  return dispatch(recheckStatusSuccess(data))
}
