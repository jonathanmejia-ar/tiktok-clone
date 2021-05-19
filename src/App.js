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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from './store/user';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyles } from './theme';
import Layout from './components/Layout';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <AppRoutes />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
