import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import { persistor, store } from './store';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from './store/user';
import { PersistGate } from 'redux-persist/integration/react';
import Videos from './components/Videos';
import VideosForm from './components/VideosForm';

const NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <h1>Not ready</h1>
    </>
  )
};

const Error404 = () => {
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  )
};

const UsersOutlet = () => {
  let user = useSelector(state => state.user.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      logOut()
    )
    navigate('/users/login');
  }

  return (
    <>
      {
        user && <button onClick={handleLogout}>Cerrar Sesion</button>
      }
      <Outlet />
    </>
  )
};

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Routes>
            <Route path="/" element={<NotImplemented />} />

            <Route path="/users" element={<UsersOutlet />}>
              <Route path="/register" element={<NotImplemented />} />
              <Route path="/login" element={<Login />} />
              <Route path="/:id" element={<NotImplemented />} />
              <Route path="/:id/videos" element={<NotImplemented />} />
            </Route>

            <Route path="/videos">
              <Route path="/" element={<Videos />} />
              <Route path="/new" element={<VideosForm />} />
              <Route path="/:id" element={<NotImplemented />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
