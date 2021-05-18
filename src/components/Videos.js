import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadVideos } from '../store/videos';
import Player from './Player';

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
            {videosState.data.videos.map((video, index) => {
                return <div key={index}>
                    <h2>{video.title}</h2>
                    <Player video={video}></Player>
                </div>
            })}
        </div>
    )
};

export default Videos;
