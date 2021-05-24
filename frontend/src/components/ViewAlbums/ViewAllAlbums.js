import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Route, useParams } from 'react-router-dom';
import './ViewAllAlbums.css';

import { getAlbum } from '../../store/album';


const ViewAllAlbums = () => {
  const dispatch = useDispatch();

  const album = useSelector(state => Object.values(state.album))
  // console.log(album)

  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);

  if (!album) {
    return null;
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
    </div>
  )
}


export default ViewAllAlbums;
