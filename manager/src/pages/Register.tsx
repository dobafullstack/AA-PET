import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCheckAuth } from '../hooks';

interface Props {
    
}

export const Register = (props: Props) => {
    const isLogin = useCheckAuth();

    if (isLogin) return <Redirect to="/" />

    return <div>Register</div>;
}
