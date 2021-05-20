import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

// POJO action creator
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// POJO action creator
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;

  if (action.type === 'session/setUser') {
    newState = Object.assign({}, state);
    newState.user = action.payload;
    return newState;
  }

  if (action.type === 'session/removeUser') {
    newState = Object.assign({}, state);
    newState.user = null;
    return newState;
  }

  return state;
};

export default sessionReducer;
