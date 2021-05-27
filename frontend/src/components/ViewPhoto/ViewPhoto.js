import { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto, getOnePhoto } from '../../store/photo';
import DeletePhoto from '../DeletePhoto/DeletePhoto';
import './ViewPhoto.css';

function ViewPhoto() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const photo = useSelector(state => state.photo[id])
    // console.log(photo.id)

    useEffect(() => {
        if (id) {
          dispatch(getOnePhoto(id));
        }
      }, [dispatch, id]);

    if (!id) {
      history.push('/')
    }

    return (
        <div className='singlePhotoPage'>
            <img className='singlePhotoContainer' src={photo?.photoLink} alt=''></img>
            <DeletePhoto />
        </div>
    )
}

export default ViewPhoto;
