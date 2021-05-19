import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createVideo } from '../store/videos';
import { AppButton, CenteredContainer, SmallContainer as SmallContainerTemplate } from '../theme';
import AppInput, { Fieldset } from './AppInput';

const SmallContainer = styled(SmallContainerTemplate)`
    text-align:center;
`;

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
        <CenteredContainer>
            <SmallContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AppInput type="text" name="title" register={{ ...register('title') }} placeholder="title" />
                    <Fieldset>
                        <label>File video</label>
                        <input type="file" name="video" register={{ ...register('video') }} />
                    </Fieldset>
                    <AppButton type="submit" small>Upload video</AppButton>
                </form>
            </SmallContainer>
        </CenteredContainer>
    )
}

export default VideosForm;
