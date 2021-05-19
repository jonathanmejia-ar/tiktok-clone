import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadVideos } from '../store/videos';
import { SmallContainer as SmallContainerTemplate } from '../theme';
import VideosList from './VideosList';

const SmallContainer = styled(SmallContainerTemplate)`
    height: 100%;
`;

const Videos = () => {
    const videosState = useSelector(state => state.videos);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const loadNextPage = async () => {
        setLoading(true);
        await dispatch(loadVideos());
        setLoading(false);
    };

    return (
        <SmallContainer>
            <VideosList
                videosState={videosState}
                loadNextPage={loadNextPage}
                loading={loading}
            ></VideosList>
            {/*videosState.data.videos.map((video, index) => {
                    return <Video video={video} key={index} />
                })*/}
        </SmallContainer>
    )
};

export default Videos;
