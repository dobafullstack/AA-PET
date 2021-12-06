import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';

export default function useCheckAuth() {
    const [isLogin, setIsLogin] = useState(false);
    const token = localStorage.getItem('access_token');

    useEffect(() => {
      if (!token) {
        setIsLogin(false);
        return;
      }

      const verifyToken = async () => {
        await jwt.verify(token, process.env.REACT_APP_SECRET_JWT as string);
        setIsLogin(true);
      };

      verifyToken().catch((err) => {
        console.log(err);
        setIsLogin(false);
      });
    }, [token]);


    return {isLogin, setIsLogin};
}
