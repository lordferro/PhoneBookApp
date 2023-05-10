import 'index.css';
import { lazy, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestristedRoute';
import { PrivateRoute } from './PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const Home = lazy(() => import('../pages/home/Home'));
const Register = lazy(() => import('pages/register'));
const Login = lazy(() => import('pages/login'));
const PhoneBook = lazy(() => import('pages/phoneBook/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data ...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={PhoneBook} redirectTo="/login" />}
        />
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
};
