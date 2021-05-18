import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from '../store/user';

const Login = () => {
    let dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        dispatch(
            logIn(
                { credentials: data }
            )
        )
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email" {...register('email')} />
            <input type="password" placeholder="Password" {...register('password')} />
            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Login;
