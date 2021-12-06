import React from 'react'

export default function MobileSideBar() {
    return (
        <div className="mobile-menu-wrapper">
        <div className="offcanvas-overlay"></div>

        
        <div className="mobile-menu-inner">

            
            <div className="offcanvas-btn-close">
                <i className="fa fa-times"></i>
            </div>
            

            
            <div className="mobile-menu-inner-wrapper">
                
                <div className="search-box-offcanvas">
                    <form>
                        <input className="search-input-offcanvas" type="text" placeholder="Search product..."/>
                        <button className="search-btn"><i className="icon-magnifier"></i></button>
                    </form>
                </div>
                

                
                <div className="mobile-navigation">
                    <nav>
                        <ul className="mobile-menu">
                            <li><a href="about.html">Home</a></li>
                            <li className="has-children">
                                <a href="#">Shop <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                <ul className="dropdown">
                                    <li><a href="shop.html">Shop Grid</a></li>
                                    <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li><a href="shop-list-fullwidth.html">Shop List Fullwidth</a></li>
                                    <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                    <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="compare.html">Compare</a></li>
                                </ul>
                            </li>
                            
                            <li><a href="about.html">Blog</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                

                
                <div className="offcanvas-lag-curr mb-6">
                    <div className="header-top-lan-curr-link">
                        <div className="header-top-lan dropdown">
                            <h4 className="title">Language:</h4>
                            <button className="dropdown-toggle" data-bs-toggle="dropdown">English <i className="fa fa-angle-down"></i></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a className="dropdown-item" href="#">English</a></li>
                                <li><a className="dropdown-item" href="#">Japanese</a></li>
                                <li><a className="dropdown-item" href="#">Arabic</a></li>
                                <li><a className="dropdown-item" href="#">Romanian</a></li>
                            </ul>
                        </div>
                        <div className="header-top-curr dropdown">
                            <h4 className="title">Currency:</h4>
                            <button className="dropdown-toggle" data-bs-toggle="dropdown">USD <i className="fa fa-angle-down"></i></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a className="dropdown-item" href="#">USD</a></li>
                                <li><a className="dropdown-item" href="#">Pound</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                

                
                <div className="mt-auto bottom-0">

                    
                    <ul className="contact-links">
                        <li><i className="fa fa-phone"></i><a href="#"> +84944609933</a></li>
                        <li><i className="fa fa-envelope-o"></i><a href="#"> dobadov3@gmail.com</a></li>
                        <li><i className="fa fa-clock-o"></i> <span>Monday - Sunday 9.00 - 18.00</span> </li>
                    </ul>
                    

                    
                    <div className="widget-social">
                        <a title="Facebook" href="#"><i className="fa fa-facebook-f"></i></a>
                        <a title="Twitter" href="#"><i className="fa fa-twitter"></i></a>
                        <a title="Linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                        <a title="Youtube" href="#"><i className="fa fa-youtube"></i></a>
                        <a title="Vimeo" href="#"><i className="fa fa-vimeo"></i></a>
                    </div>
                    
                </div>
                
            </div>
            

        </div>
        
    </div>
    )
}
