import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import MainJQuery from '../utils/MainJQuery';
import $ from 'jquery';

export const AuthContext = React.createContext<any>(null);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    $('.action-execute').on('click', function () {
      // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
      if ($('.action-execute, .header-search-form').hasClass('visible-execute')) {
        $('.action-execute, .header-search-form').removeClass('visible-execute');
      }
      // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
      else {
        $('.action-execute, .header-search-form').removeClass('visible-execute');
        $('.action-execute, .header-search-form').addClass('visible-execute');
      }
    });
    $('.cart-visible').click(function () {
      $('.header-cart-content').slideToggle('slow');
    });

    MainJQuery($);
  }, []);

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

  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
}
