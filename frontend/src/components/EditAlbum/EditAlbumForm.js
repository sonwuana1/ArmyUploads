import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateAlbum } from '../../store/album';


function EditAlbumForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(updateAlbum());
    }, [dispatch]);


    async function handleSubmit(e) {
        e.preventDefault();

        const payload = { name }

        const updatedAlbum = await dispatch(updateAlbum(payload));
        console.log('NEWWWWW', updatedAlbum)
        if (updatedAlbum) {
          history.push(`/album/${updatedAlbum.id}`);
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
