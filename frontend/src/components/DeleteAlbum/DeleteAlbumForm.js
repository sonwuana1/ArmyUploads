import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteAlbum } from '../../store/album';
import '../EditAlbum/EditAlbumForm.css';

function DeleteAlbumForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        await dispatch(deleteAlbum(id));
        history.push(`/`);
    }

    return (
        <form
        className="delete-album-form"
        onSubmit={handleSubmit}>
        <div>
            <button type="submit">Delete Album</button>
        </div>
        </form>
    )
}

export default DeleteAlbumForm;
