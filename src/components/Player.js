import React, { useEffect, useRef } from 'react'
import { PlayerSdk } from '@api.video/player-sdk';
import styled from 'styled-components';

const Iframe = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const Player = ({ video }) => {
    let player = useRef(null);
    console.log(player)
    useEffect(() => {
        if (!player.current) {
            player.current = new PlayerSdk(`#appPlayer-${video.id}`);
            player.current.mute();
            player.current.play();
            player.current.setLoop(true);
        }
    }, [video.id]);

    return (
        <div>
            <Iframe
                title={video.title}
                width="100%"
                height="100%"
                id={`appPlayer-${video.id}`}
                scrolling="no"
                allowFullScreen={true}
                src={`https://embed.api.video/vod/${video.remoteVideoId}`}
                frameBorder="0"
            ></Iframe>
        </div>
    )
}

export default Player;
