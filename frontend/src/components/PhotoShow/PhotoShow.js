import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import ImageUploader from 'react-images-upload';
import { getOneAlbum } from '../../store/album';
import { uploadPhoto } from '../../store/photo';
import './PhotoShow.css';


function PhotoShow() {
  const { id } = useParams();
  // console.log(id)
  const album = useSelector(state => state.album[id])
  // console.log(album)

  const [name, setName] = useState('');
  const [photoLink, setPhotoLink] = useState('')
  // const [pictures, setPictures] = useState([]);

  const history = useHistory();

  // const onDrop = picture => {
  //   setPictures([...pictures, picture]);
  // };

  const dispatch = useDispatch();


  useEffect(() => {
    if (id) {
      dispatch(getOneAlbum(id));
    }
  }, [dispatch, id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { name, photoLink }

    const photo = await dispatch(uploadPhoto(payload));
    if (photo) {
      history.push(`/photo/${photo.id}`);
    }
  }

  return (
    <div className="album-show">
      <h2>Photos:</h2>
      {album?.Photos?.map(pic => (
        <img className='photoContainer' src={pic.photoLink} alt='bts members'/>
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
          {/* <ImageUploader
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          /> */}
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
