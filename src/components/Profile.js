import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadVideosForUser } from '../store/videos';
import Player from './Player';

const Profile = () => {
    const user = useSelector(state => state.user.user);
    const videos = useSelector(state => state.videos.data.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadVideosForUser()
        )
    }, [])

    return (
        <div>
            <h1>
                {`${user.username}'s videos`}
            </h1>
            {videos.map((video, index) => {
                return <div key={index}>
                    <h2>{video.title}</h2>
                    <Player video={video}></Player>
                </div>
            })}
        </div>
    )
}

export default Profile;
