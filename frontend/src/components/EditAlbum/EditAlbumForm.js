import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateAlbum } from '../../store/album';


function EditAlbumForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const history = useHistory();

    const [name, setName] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();

        const payload = { name }

        const updatedAlbum = await dispatch(updateAlbum(id, payload));
        console.log('NEWWWWW', updatedAlbum)
        if (updatedAlbum) {
          history.push(`/`);
        }
    }

    return (
        <form
        className="update-album-form"
        onSubmit={handleSubmit}>
        <div>
          <label>
              Name
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
            <button type="submit">Update Album</button>
        </div>
        </form>
    )

}


export default EditAlbumForm;
