import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadVideos } from '../store/videos';

const Videos = () => {
    const videosState = useSelector(state => state.videos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            loadVideos()
        )
    }, [])
    return (
        <div>
            {videosState.status}
        </div>
    )
};

export default Videos;
