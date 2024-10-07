import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthState } from '../../store/reducers/authSlice';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import { Outlet, useNavigate } from 'react-router-dom';
import * as fromReducer from '../../store/reducers';

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItemCount: number = useSelector(fromReducer.selectCartItemCount);

  const handleSystemStateChange = (event: any) => {
    if (event?.detail?.globalUrl) {
      const { globalUrl } = event.detail;

      navigate(globalUrl);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const userInfo = localStorage.getItem('userInfo');
    const user = userInfo ? JSON.parse(userInfo) : null;

    dispatch(setAuthState({ token, user }));
    window.addEventListener('containerState', handleSystemStateChange);

    return () => {
      window.removeEventListener('containerState', handleSystemStateChange);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('productState', {
        detail: {
          cartItemCount: cartItemCount,
        },
      })
    );
  }, [cartItemCount]);

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
