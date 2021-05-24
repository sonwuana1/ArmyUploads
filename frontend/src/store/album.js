
const LOAD = 'album/LOAD';

const load = albums => ({
    type: LOAD,
    albums,
});


export const getAlbum = () => async dispatch => {
    const response = await fetch(`/api/album`);

    if (response.ok) {
      const albums = await response.json();
      // console.log('ALBUMS', albums)
      // prints an array of the albums obj
      dispatch(load(albums));
    }
};


const initialState = {};


const albumReducer = (state = initialState, action) => {
    if (action.type === 'album/LOAD') {
        const allAlbums = { ...state };
        // console.log(action.albums)
        action.albums.forEach(album => {
        allAlbums[album.id] = album;
      });
      // return {
      //   ...allAlbums,
      //   ...state,
      //   list: action.list,
      // };
      return allAlbums;
    }
    return state;
}

export default albumReducer;
