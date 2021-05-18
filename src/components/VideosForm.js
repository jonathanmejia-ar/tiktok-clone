import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createVideo } from '../store/videos';

const VideosForm = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (video) => {
        let formData = new FormData();
        formData.append('title', video.title);
        formData.append('video', video.video[0]);

        dispatch(
            createVideo(formData)
        )
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" {...register('title')} placeholder="title" />
            <input type="file" name="video" {...register('video')} />
            <input type="submit" value="Send" />
        </form>
    )
}

export default VideosForm;
