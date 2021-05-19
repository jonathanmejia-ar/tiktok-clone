import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVideo } from '../store/videos';
import { SmallContainer } from '../theme';
import Player from './Player';
import Video from './Video';

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
        <SmallContainer >
            {
                video && <Video video={video}></Video>
            }
        </SmallContainer>
    )
}

export default VideoShow;
