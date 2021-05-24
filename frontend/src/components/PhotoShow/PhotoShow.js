import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAlbum } from '../../store/album';
import { ViewAllAlbums } from '../ViewAlbums/ViewAllAlbums';


function PhotoShow() {
  const dispatch = useDispatch();
  // const { albumId } = useParams();
  // const album = useSelector(state => state.album);
  // console.log(album)


  // console.log(albumId)


    useEffect(() => {
        dispatch(getOneAlbum());
    }, [dispatch]);

  return (
    <div className="album-show">

    </div>
  )
}

export default PhotoShow;
