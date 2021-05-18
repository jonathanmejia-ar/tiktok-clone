import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVideo } from '../store/videos';
import Player from './Player';

const VideoShow = () => {
    let { id } = useParams();
    let dispatch = useDispatch();
    let video = useSelector(state => state.videos.currentVideo);

    useEffect(() => {
        dispatch(
            getVideo(id)
        )
    }, [id])

    return (
        <div >
            {
                video &&
                <>
                    <h2>{video.title}</h2>
                    <Player video={video}></Player>
                </>
            }
        </div>
    )
}

export default VideoShow;
