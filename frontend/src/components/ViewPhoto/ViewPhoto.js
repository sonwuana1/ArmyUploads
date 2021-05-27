import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePhoto } from '../../store/photo';

function ViewPhoto() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const photo = useSelector(state => state.photo[id])
    // console.log(photo.id)

    useEffect(() => {
        if (id) {
          dispatch(getOnePhoto(id));
        }
      }, [dispatch, id]);

    return (
        <div>
            <img src={photo?.photoLink}></img>
        </div>
    )
}

export default ViewPhoto;
