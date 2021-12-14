import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckoutProvider from '../../context/checkoutContext';
import { About, Account, Blog, BlogDetail, Cart, Category, CategoryDetail, Checkout, Compare, Contact, Fail, FAQs, ForgetPassword, Home, Login, NotFound, Product, Register, Success, Wishlist } from '../../pages';
import PrivateRoute from './PrivateRoute';

export default function Navigation() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route
              path='/login'
              element={
                  <PrivateRoute reverse>
                      <Login />
                  </PrivateRoute>
              }
          />
          <Route
              path='/register'
              element={
                  <PrivateRoute reverse>
                      <Register />
                  </PrivateRoute>
              }
          />
          <Route path='/cart' element={<Cart />} />
          <Route
              path='/checkout'
              element={
                  <CheckoutProvider>
                      <Checkout />
                  </CheckoutProvider>
              }
          />
          <Route
              path='/wishlist'
              element={
                  <PrivateRoute>
                      <Wishlist />
                  </PrivateRoute>
              }
          />
          <Route
              path='/my-account'
              element={
                  <PrivateRoute>
                      <Account />
                  </PrivateRoute>
              }
          />
          <Route path='/category/:categoryId' element={<Category />} />
          <Route path='/category/detail/:categoryDetailId' element={<CategoryDetail />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:blogId' element={<BlogDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/success' element={<Success />} />
          <Route path='/fail' element={<Fail />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
  );
}