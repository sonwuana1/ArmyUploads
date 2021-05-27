import { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAlbum } from '../../store/album';
import { uploadPhoto } from '../../store/photo';
import '../EditAlbum/EditAlbumForm.css';


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
      history.push(`/`);
    }
  }

  return (
    <div className="photoOuterContainer">
      <h2 className='photoHeader'>Photos:</h2>
      <div className='allAlbumPhotos'>
        {album?.Photos?.map(pic => (
          <div>
            <Link to={`/photo/${pic.id}`}>
              <img className='photoContainer' src={pic.photoLink} alt='bts members'/>
            </Link>
          </div>
        ))}
      </div>
      <form
        className="photo-form"
        onSubmit={handleSubmit}>
        <div>
          <label>
            Name of picture
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </label>
          </div>
          <label>
            Link
          <input
            type="text"
            placeholder="Link"
            value={photoLink}
            onChange={(e) => setPhotoLink(e.target.value)}
          />
          </label>
          <button type="submit">Upload Photo</button>
      </form>
    </div>
  )
}

export default PhotoShow;
