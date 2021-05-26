import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './ViewAllAlbums.css';

import { getAlbum, createAlbum } from '../../store/album';


const ViewAllAlbums = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');

  const album = useSelector(state => Object.values(state.album))
  // console.log(album)

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);

  if (!album) {
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { name }

    const album = await dispatch(createAlbum(payload));
    if (album) {
      history.push(`/album/${album.id}`);
    }
  }

  return (
    <div className='albumContainer'>
      <h2 className='albumHeader'>View All Albums</h2>
      <ul className='albumListContainer'>
        {album.map(obj => (
          <li key={obj.name}>
            <Link to={`album/${obj.id}`}>{obj.name}</Link>
          </li>
        ))}
      </ul>
      <form
        className="album-form"
        onSubmit={handleSubmit}>
          <label>
              Name
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
            <button
                type="submit"
            >
              Create Album
            </button>
        </form>
    </div>
  )
}


export default ViewAllAlbums;
