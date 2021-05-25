import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAlbum } from '../../store/album';


function PhotoShow() {
  const { id } = useParams();
  // console.log(id)
  const album = useSelector(state => state.album[id])
  console.log(album)

  const dispatch = useDispatch();


  useEffect(() => {
    if (id) {
      dispatch(getOneAlbum(id));
    }
  }, [dispatch, id]);

  return (
    <div className="album-show">
    <h2>Photos:</h2>
    {album.Photos.map(pic => (
      <img className='sleeping-album' src={pic.photoLink} alt='bts members sleeping'/>
    ))}
    </div>
  )
}

export default PhotoShow;
