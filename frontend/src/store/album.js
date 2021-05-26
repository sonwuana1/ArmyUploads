import { csrfFetch } from './csrf';

const LOAD = 'album/LOAD';
const ADD_ONE = 'album/ADD_ONE';
const REMOVE_ONE = 'album/REMOVE_ONE';

const load = albums => ({
    type: LOAD,
    albums,
});

const addOneAlbum = oneAlbum => ({
  type: ADD_ONE,
  oneAlbum,
});

const remove = (id, userId) => ({
  type: REMOVE_ONE,
  id,
  userId,
});


export const getAlbum = () => async dispatch => {
    const response = await csrfFetch(`/api/album`);

    if (response.ok) {
      const albums = await response.json();
      // console.log('ALBUMS', albums)
      // prints an array of album objs
      dispatch(load(albums));
    }
};


export const getOneAlbum = (id) => async dispatch => {
  // console.log(id)
  const response = await csrfFetch(`/api/album/${id}`);

  if (response.ok) {
    const oneAlbum = await response.json();
    // console.log('ALBUMS', oneAlbum)
    dispatch(addOneAlbum(oneAlbum));
  }
}

export const createAlbum = (data) => async dispatch => {
  const response = await csrfFetch(`/api/album`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    const album = await response.json();
    dispatch(addOneAlbum(album));
    return album;
  }
}

export const updateAlbum = (id, data) => async dispatch => {
  // console.log(data)
  const response = await csrfFetch(`/api/album/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const album = await response.json();
    dispatch(addOneAlbum(album));
    return album;
  }
};

export const deleteAlbum = (id) => async dispatch => {
  const response = await csrfFetch(`/api/album/${id}`, {
    method: 'delete',
  })

  if (response.ok) {
    const album = await response.json();
    dispatch(remove(album.id, album.userId));
  }
}


const initialState = {};


const albumReducer = (state = initialState, action) => {
    if (action.type === 'album/LOAD') {
        const allAlbums = { ...state };
        // console.log(action.albums)
        action.albums.forEach(album => {
        allAlbums[album.id] = album;
      });
      return allAlbums;
    }
    if (action.type === 'album/ADD_ONE') {
      if (!state[action.oneAlbum.id]) {
        const newState = {
          ...state,
        [action.oneAlbum.id]: action.oneAlbum
        }
        return newState;
      }
      return {
        ...state, [action.oneAlbum.id]: {
          ...state[action.oneAlbum.id], ...action.oneAlbum,
        }
      }
    }
    if (action.type === 'album/REMOVE_ONE') {
      const newState = { ...state }
      delete newState[action.id]
      return newState;
    }

  return state;
}

export default albumReducer;
