import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../PhotoShow/PhotoShow.css';

import { getPhotos } from '../../store/photo';
import { Link } from 'react-router-dom';

function ViewAllPhotos() {
    const dispatch = useDispatch();

    const photos = useSelector(state => Object.values(state.photo))
    // console.log(photos)

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    if (!photos) {
        return null;
    }

    return (
        <div className="photoOuterContainer">
            <h2>All Photos:</h2>
            <div className="photoOutline">
                {photos?.map(pic => (
                <div className='container'>
                    <Link to={`/photo/${pic.id}`}>
                        <img key={pic.id} className='photoContainer' src={pic.photoLink} alt='bts members'/>
                    </Link>
                </div>
                ))}
            </div>

        </div>
    )
}


export default ViewAllPhotos;
