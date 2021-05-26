import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAlbum } from '../../store/album';
import { uploadPhoto } from '../../store/photo';
import './PhotoShow.css';


function PhotoShow() {
  const { id } = useParams();
  // console.log(id)
  const album = useSelector(state => state.album[id])
  // console.log(album.id)
  const albumId = album?.id

  const [name, setName] = useState('');
  const [photoLink, setPhotoLink] = useState('')

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOneAlbum(id));
    }
  }, [dispatch, id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { name, photoLink, albumId }
    console.log(payload)

    const photo = await dispatch(uploadPhoto(payload));
    if (photo) {
      history.push(`/album/${albumId}`);
    }
  }

  return (
    <div className="album-show">
      <h2>Photos:</h2>
      {album?.Photos?.map(pic => (
        <div>
          <img className='photoContainer' src={pic.photoLink} alt='bts members'/>
        </div>
      ))}
      <form
        className="photo-form"
        onSubmit={handleSubmit}>
        <label>
          Name of picture
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </label>
          <label>
            Link
          <input
            type="text"
            placeholder="Link"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
          />
          </label>
          <button
            type="submit"
          >
            Upload Photo
          </button>
      </form>
    </div>
  )
}

export default PhotoShow;
