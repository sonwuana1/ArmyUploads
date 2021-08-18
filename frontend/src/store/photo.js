import { csrfFetch } from './csrf';


const LOAD = 'photo/LOAD';
const ADD_ONE = 'photo/ADD_ONE'
const REMOVE_ONE = 'photo/REMOVE_ONE';



const load = photos => ({
    type: LOAD,
    photos,
});

const addOnePhoto = onePhoto => ({
    type: ADD_ONE,
    onePhoto,
});

const remove = (id, userId) => ({
  type: REMOVE_ONE,
  id,
  userId,
});


export const getPhotos = () => async dispatch => {
    const response = await csrfFetch(`/api/photo`);

    if (response.ok) {
      const photos = await response.json();

      dispatch(load(photos));
    }
};

export const getOnePhoto= (id) => async dispatch => {
  // console.log(id)
  const response = await csrfFetch(`/api/photo/${id}`);

  if (response.ok) {
    const onePhoto = await response.json();
    dispatch(addOnePhoto(onePhoto));
  }
}

export const uploadPhoto = (data) => async dispatch => {
  const { images, image, name, albumId } = data;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("albumId", albumId);

  // for multiple files
  if (images && images.length !== 0) {
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  }

  // for single file
  if (image) formData.append("image", image);

    const response = await csrfFetch(`/api/photo`, {
      method: 'post',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })

    if (response.ok) {
      const photo = await response.json();
      dispatch(addOnePhoto(photo));
      return photo;
    }
}

export const deletePhoto = (id) => async dispatch => {
  const response = await csrfFetch(`/api/photo/${id}`, {
    method: 'delete',
  })

  if (response.ok) {
    const photo = await response.json();
    dispatch(remove(photo.id, photo.userId));
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
      if (action.type === 'photo/REMOVE_ONE') {
        const newState = { ...state }
        delete newState[action.id]
        return newState;
      }

  return state;
}

export default photoReducer;
