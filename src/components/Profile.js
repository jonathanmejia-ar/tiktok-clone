import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadVideosForUser } from '../store/videos';
import { AppButton as AppButtonTemplate, SmallContainer } from '../theme';
import LogoutButtonTemplate from './LogoutButton';
import Player from './Player';
import VideoThumbnail from './VideoThumbnail';

const ProfileHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(6,minmax(auto,1fr));
    grid-template-rows: 100px;
    grid-template-areas: "imageContainer imageContainer imageContainer imageContainer imageContainer imageContainer"
                        "userInfo userInfo userInfo userInfo userInfo userInfo"
                        "following following followers followers likes likes"
                        "edit edit edit logOut logOut logOut";
  text-align: center;
  
  padding: ${({ theme }) => theme.dims.padding.largePadding};
  & .image-container{
    grid-area: imageContainer;
  }
  & .info-container{
    grid-area: userInfo;
  }
`;

const ProfileImage = styled.img`
    max-height: 100%;
    border-radius: 50%;
`;

const Pill = styled.span`
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
    font-size: ${({ theme }) => theme.dims.fonts.small};
    padding: ${({ theme }) => theme.dims.padding.largePadding};
    display: inline-block;
`;

const Counter = styled.div`
    grid-area: ${({ area }) => area};
    & .number{
        font-size: ${({ theme }) => theme.dims.fonts.medium};
        display: block;
    }
    & .description{
        color: ${({ theme }) => theme.colors.silver};
    }
`;

const AppButton = styled(AppButtonTemplate)`
    grid-area: edit;
    display: block;
    width:100%;
`;

const VideoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(auto,1fr));
`;

const LogoutButton = styled(LogoutButtonTemplate)`
    grid-area: logOut;
    display: block;
    width:100%;
`;

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
        <SmallContainer>
            <ProfileHeader>
                <div className="image-container">
                    <ProfileImage src="/icons/avatar.jpg" />
                </div>
                <div className="info-container">
                    <p><strong>@{user.username}</strong></p>
                    <Pill>{videos.length} videos</Pill>
                </div>
                <Counter area="following">
                    <p className="number">0</p>
                    <p className="description">Following</p>
                </Counter>
                <Counter area="followers">
                    <p className="number">0</p>
                    <p className="description">Followers</p>
                </Counter>
                <Counter area="likes">
                    <p className="number">0</p>
                    <p className="description">Likes</p>
                </Counter>
                <AppButton className="button">Edit</AppButton>
                <LogoutButton >Log Out</LogoutButton>
            </ProfileHeader>
            <VideoContainer>
                {
                    videos && videos.map((video, index) => <VideoThumbnail video={video} key={index} />)
                }
            </VideoContainer>
        </SmallContainer>
    )
};

export default Profile;
