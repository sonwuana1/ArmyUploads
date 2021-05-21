
const LOAD = 'album/LOAD';

const load = list => ({
    type: LOAD,
    list,
});


export const getAlbum = () => async dispatch => {
    const response = await fetch(`/api/album`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
};


const initialState = {
    list: [],
};



const albumReducer = (state = initialState, action) => {
    if (action.type === 'album/LOAD') {
        const allAlbums = {};
        console.log(action.list)
        action.list.forEach(photo => {
        allAlbums[photo.id] = photo;
      });
      return {
        ...allAlbums,
        ...state,
        list: action.list,
      };
    }
    return state;
}

export default albumReducer;
