import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateAlbum } from '../../store/album';


function EditAlbumForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(updateAlbum());
    }, [dispatch]);


    async function handleSubmit(e) {
        e.preventDefault();

        const payload = { name }

        const updatedAlbum = await dispatch(updateAlbum(payload));
        console.log('NEWWWWW', updateAlbum)
        if (updatedAlbum) {
          history.push(`/album/${updateAlbum.id}`);
        }
    }

    return (
        <form
        className="update-album-form"
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
              Update Album
            </button>
        </form>
    )

}


export default EditAlbumForm;
