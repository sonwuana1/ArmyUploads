import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../PhotoShow/PhotoShow.css';

import { getPhotos } from '../../store/photo';

function ViewAllPhotos() {
    const dispatch = useDispatch();

    const photos = useSelector(state => Object.values(state.photo))
    console.log(photos)

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    if (!photos) {
        return null;
    }


    return (
        <div className="photoOuterContainer">
            <h2>All Photos:</h2>
            {photos?.map(pic => (
            <img className='photoContainer' src={pic.photoLink} alt='bts members'/>
            ))}
        </div>
    )
}


export default ViewAllPhotos;
