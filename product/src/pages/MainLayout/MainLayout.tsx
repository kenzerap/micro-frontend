import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthState } from '../../store/reducers/authSlice';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const userInfo = localStorage.getItem('userInfo');
    const user = userInfo ? JSON.parse(userInfo) : null;

    dispatch(setAuthState({ token, user }));
  }, [dispatch]);

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
