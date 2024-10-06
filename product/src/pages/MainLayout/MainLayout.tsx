import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../../store/reducers/authSlice';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import { Outlet, useNavigate } from 'react-router-dom';

const MainLayout: React.FC<{ url: string }> = ({ url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const userInfo = localStorage.getItem('userInfo');
    const user = userInfo ? JSON.parse(userInfo) : null;

    dispatch(setAuthState({ token, user }));
  }, [dispatch]);

  useEffect(() => {
    navigate(url);
  }, [navigate, url]);

  return (
    <Fragment>
      <ToastMessage></ToastMessage>

      <div className="m-8">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default MainLayout;
