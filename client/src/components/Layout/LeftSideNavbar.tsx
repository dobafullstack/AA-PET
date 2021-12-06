import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export default function LeftSideNavbar({}: Props): ReactElement {
  return (
    <div className='col-lg-6 d-none d-lg-block'>
      <div className='main-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <MegaMenu />
          {/* <NavItem hasChildren title='Pages'>
            <li>
              <a href='about.html'>About Us</a>
            </li>
            <li>
              <a href='contact.html'>Contact Us</a>
            </li>
            <li>
              <a href='error-404.html'>Error 404</a>
            </li>
            <li>
              <a href='faq.html'>FAQ</a>
            </li>
            <li>
              <a href='login.html'>Login</a>
            </li>
            <li>
              <a href='register.html'>Register</a>
            </li>
          </NavItem> */}
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NavItem({ hasChildren, children, title }: { hasChildren: boolean; children?: React.ReactNode; title: string }) {
  return (
    <li className={hasChildren ? 'has-children' : ''}>
      <a href='#'>{title}</a>
      {hasChildren ? <ul className='sub-menu'>{children}</ul> : null}
    </li>
  );
}

function MegaMenu() {
  return (
    <li className='has-children position-static'>
      <a href='#'>Shop</a>
      <ul className='mega-menu'>
        <li className='mega-menu-col'>
          <h4 className='mega-menu-title'>
            <Link to='/category'>Pet</Link>
          </h4>
          <ul className='mb-n2'>
            <li>
              <Link to='/category'>Single Product</Link>
            </li>
          </ul>
        </li>
        <li className='mega-menu-col'>
          <h4 className='mega-menu-title'>
            <Link to='/category'>Food</Link>
          </h4>
          <ul className='mb-n2'>
            <li>
              <Link to='/category'>Single Product</Link>
            </li>
          </ul>
        </li>
        <li className='mega-menu-col'>
          <h4 className='mega-menu-title'>
            <Link to='/category'>Clothes</Link>
          </h4>
          <ul className='mb-n2'>
            <li>
              <Link to='/category'>Single Product</Link>
            </li>
          </ul>
        </li>
        <li className='mega-menu-col'>
          <div className='megamenu-image'>
            <a href='shop.html'>
              <img className='fit-image' src='https://template.hasthemes.com/amber/amber/assets/images/products/medium-product/5.png' alt='Megamenu Image' />
            </a>
          </div>
        </li>
      </ul>
    </li>
  );
}
