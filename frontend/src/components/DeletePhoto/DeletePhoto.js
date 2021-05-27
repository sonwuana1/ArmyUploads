import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deletePhoto } from '../../store/photo';
import '../EditAlbum/EditAlbumForm.css';

function DeletePhoto() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const history = useHistory();

    async function handleSubmit() {
        await dispatch(deletePhoto(id));
        history.push(`/`);
    }

    return (
        <div className='deletePhotoButton'>
            <button type="submit" onClick={handleSubmit}>Delete</button>
        </div>
    )
}

export default DeletePhoto;
