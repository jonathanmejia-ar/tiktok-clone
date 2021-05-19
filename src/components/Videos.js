import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadVideos } from '../store/videos';
import { SmallContainer } from '../theme';
import Video from './Video';

const Videos = () => {
    const videosState = useSelector(state => state.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadVideos()
        )
    }, []);

    return (
        <div>
            <SmallContainer>
                {videosState.data.videos.map((video, index) => {
                    return <Video video={video} key={index} />
                })}
            </SmallContainer>
        </div>
    )
};

export default Videos;
