const LOAD = 'photo/LOAD';


const load = photos => ({
    type: LOAD,
    photos,
});




export const getPhotos = () => async dispatch => {
    const response = await fetch(`/api/photo`);

    if (response.ok) {
      const photos = await response.json();

      dispatch(load(photos));
    }
};


const initialState = {};


const photoReducer = (state = initialState, action) => {
    if (action.type === 'photo/LOAD') {
        const allPhotos = { ...state };
        action.photos.forEach(photo => {
        allPhotos[photo.id] = photo;
      });
      return allPhotos;
    }

  return state;
}

export default photoReducer;
