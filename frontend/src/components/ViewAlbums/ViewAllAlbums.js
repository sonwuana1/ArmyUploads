import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import './ViewAllAlbums.css';

import { getAlbum } from '../../store/album';


const ViewAllAlbums = () => {
  const dispatch = useDispatch();
  // const { albumId } = useParams();
  // console.log(albumId)

  const album = useSelector(state => state.album)
  console.log(album)


  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);

  if (!album) {
    return null;
  }

  return (
    <div className='albumContainer'>
      <h2 className='albumHeader'>View All Albums</h2>
      {/* <NavLink to={`/album/${album.id}`}>{album[0].name}</NavLink> */}
      <p>{album.name}</p>
      {/* <ul className='albumListContainer'>
        {album.map(obj => {
          <li className='albumList'>{obj.name}</li>
        })}
      </ul> */}

    </div>
  )
}


export default ViewAllAlbums;
