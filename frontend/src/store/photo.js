import { csrfFetch } from './csrf';


const LOAD = 'photo/LOAD';
const ADD_ONE = 'album/ADD_ONE'


const load = photos => ({
    type: LOAD,
    photos,
});

const addOnePhoto = onePhoto => ({
    type: ADD_ONE,
    onePhoto,
  });


export const getPhotos = () => async dispatch => {
    const response = await csrfFetch(`/api/album`);

    if (response.ok) {
      const photos = await response.json();

      dispatch(load(photos));
    }
};

export const uploadPhoto = (data) => async dispatch => {
    const response = await csrfFetch(`/api/photo`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const photo = await response.json();
      dispatch(addOnePhoto(photo));
      return photo;
    }
}


const initialState = {};


const photoReducer = (state = initialState, action) => {
    if (action.type === 'photo/LOAD') {
        const allPhotos = { ...state };
        action.photos.forEach(photo => {
        allPhotos[photo.id] = photo;
      });
      return allPhotos;
    }
    if (action.type === 'photo/ADD_ONE') {
        if (!state[action.onePhoto.id]) {
          const newState = {
            ...state,
          [action.onePhoto.id]: action.onePhoto
          }
          return newState;
        }
        return {
          ...state, [action.onePhoto.id]: {
            ...state[action.onePhoto.id], ...action.onePhoto,
          }
        }
      }

  return state;
}

export default photoReducer;
