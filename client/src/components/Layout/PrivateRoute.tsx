import React, { ReactElement, useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

interface Props {
  reverse?: boolean;
  children: React.ReactNode;
}

export default function PrivateRoute({ reverse, children }: Props): ReactElement {
  const { isLogin } =  useContext(AuthContext);

  if (reverse) {
    if (isLogin) return <Navigate to='/' />;
    console.log('reverse')
  } else {
    if (!isLogin) return <Navigate to='/login' />;
    console.log('non-reverse')
  }

  return <>{children}</>;
}
