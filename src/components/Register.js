import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { register as registerThunk } from '../store/user';
import UserFormLayout from './UserFormLayout';
import AppInput from './AppInput';
import { AppButton } from '../theme';
import { useNavigate } from 'react-router';

const Register = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        await dispatch(
            registerThunk(
                { credentials: data }
            )
        );
        navigate('/videos');
    };

    return (
        <UserFormLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AppInput type="email" label="Email" register={{ ...register('email') }} />
                <AppInput type="text" label="Username" register={{ ...register('username') }} />
                <AppInput type="password" label="Password" register={{ ...register('password') }} />
                <AppButton type="submit" small>Register</AppButton>
            </form>
        </UserFormLayout>
    )
}

export default Register;
