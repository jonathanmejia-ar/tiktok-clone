import React from "react";
import { useDispatch } from "react-redux";
import { likeVideo } from "../store/likes";
import { ClearButton, SvgButton } from "../theme";

const LikeButton = ({ video }) => {
  let dispatch = useDispatch();

  const handleLike = (videoId) => {
    dispatch(likeVideo(videoId));
  };

  return (
    <ClearButton onClick={() => handleLike(video.id)}>
      <SvgButton
        src="./icons/heart.svg"
        active={video.isLikedByCurrentUser}
      ></SvgButton>
    </ClearButton>
  );
};

export default LikeButton;
