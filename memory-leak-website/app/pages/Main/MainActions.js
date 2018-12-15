export const FETCH_AUTH_DATA = "FETCH_AUTH_DATA";
export const WILL_FETCH_AUTH_DATA = "WILL_FETCH_AUTH_DATA";
export const DID_FETCH_AUTH_DATA = "DID_FETCH_AUTH_DATA";

export const fetchAuthData = (params) => ({
  type: FETCH_AUTH_DATA,
  payload: params
});

export const willFetchAuthData = (params) => ({
  type: WILL_FETCH_AUTH_DATA,
  payload: params
});

export const didFetchAuthData = (params) => ({
  type: DID_FETCH_AUTH_DATA,
  payload: params
});

export default {
  fetchAuthData,
  willFetchAuthData,
  didFetchAuthData
};
