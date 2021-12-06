import $ from 'jquery';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Header, MobileSideBar, Modal, PrivateRoute } from './components/Layout';
import { About, Account, Blog, BlogDetail, Cart, Category, Checkout, Compare, Contact, FAQs, ForgetPassword, Home, Login, NotFound, Product, Register, Wishlist } from './pages';
import MainJQuery from './utils/MainJQuery.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
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
        <Route path='/checkout' element={
            <PrivateRoute>
                <Checkout />
            </PrivateRoute>
        } />
        <Route path='/wishlist' element={
            <PrivateRoute>
                <Wishlist />
            </PrivateRoute>
        } />
        <Route path='/my-account' element={
            <PrivateRoute>
                <Account />
            </PrivateRoute>
        } />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:blogId' element={<BlogDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <MobileSideBar />
      <a href='#' className='scroll-top show' id='scroll-top'>
        <i className='arrow-top ti-angle-double-up'></i>
        <i className='arrow-bottom ti-angle-double-up'></i>
      </a>
      <Modal />
      <ToastContainer position='bottom-left' autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
