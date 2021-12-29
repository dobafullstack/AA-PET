import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header, MobileSideBar, Modal, Navigation } from './components/Layout';
import './assets/css/style.css'
import ScrollToTop from './components/Layout/ScrollToTop';

function App() {

  return (
      <ScrollToTop>
          <Header />
          <Navigation />
          <Footer />
          <MobileSideBar />
          <a href='#' className='scroll-top show' id='scroll-top'>
              <i className='arrow-top ti-angle-double-up'></i>
              <i className='arrow-bottom ti-angle-double-up'></i>
          </a>
          <Modal />
          <ToastContainer
              position='bottom-left'
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
      </ScrollToTop>
  );
}

export default App;
