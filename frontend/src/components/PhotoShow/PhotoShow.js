import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAlbum } from '../../store/album';


function PhotoShow() {
  const { albumId } = useParams();
  console.log(albumId)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getOneAlbum(albumId));
  }, [dispatch]);

  return (
    <div className="album-show">
      <h2>Photos:</h2>

    </div>
  )
}

export default PhotoShow;
