import to from 'await-to-js'
import {formToJSON} from "../utils/formToJSON"

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

export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const toggleModal = (isOpen) => ({
  type: TOGGLE_MODAL,
  isOpen,
})


export const SIGN_UP_CONSUMER_REQUEST = "SIGN_UP_CONSUMER_REQUEST"
export const SIGN_UP_CONSUMER_SUCCESS = "SIGN_UP_CONSUMER_SUCCESS"
export const SIGN_UP_CONSUMER_FAILURE = "SIGN_UP_CONSUMER_FAILURE"

export const signUpConsumerRequest = () => ({
  type: SIGN_UP_CONSUMER_REQUEST,
})

export const signUpConsumerSuccess = () => ({
  type: SIGN_UP_CONSUMER_SUCCESS,
})

export const signUpConsumerFailure = () => ({
  type: SIGN_UP_CONSUMER_FAILURE,
})

export const signUpConsumer = (e) => async (dispatch) => {
  e.preventDefault()

  dispatch(signUpConsumerRequest())

  const data = formToJSON(e.target.elements)
  let err, response

  [err, response] = await to(fetch('/api/v1/consumer/signup', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data),
  }))

  if (err || !response || response.status !== 200) {
    dispatch(signUpConsumerFailure())
  }

  dispatch(signUpConsumerSuccess())
}
