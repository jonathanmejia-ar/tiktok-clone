import React from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/user';
import { Link } from 'react-router-dom';
import Home from '../Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Videos from '../components/Videos';
import VideosForm from '../components/VideosForm';
import VideoShow from '../components/VideoShow';

const NotImplemented = () => {
    return (
        <>
            <Link to="/videos">Ir a videos</Link>
            <h1>Not ready</h1>
        </>
    );
};

const Error404 = () => {
    return (
        <>
            <h1>404 Not Found</h1>
        </>
    );
};

const AppRoutes = () => {
    const user = useSelector(state => state.user.user);

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/users" element={user ? <Navigate to="/videos"></Navigate> : <Outlet />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Route>

            <Route path="" element={user ? <Outlet /> : <Navigate to="/users/login"></Navigate>}>

                <Route path="users/profile" element={<Profile />} />
                <Route path="users/:id/videos" element={<NotImplemented />} />

                <Route path="/videos">
                    <Route path="/" element={<Videos />} />
                    <Route path="/new" element={<VideosForm />} />
                    <Route path="/:id" element={<VideoShow />} />
                </Route>
            </Route>

            <Route path="*" element={<Error404 />} />
        </Routes>
    )
};

export default AppRoutes;
