import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Layout/Breadcrumb";

export default function NotFound() {
    return (
        <>
            <Breadcrumb title='Error 404'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>Error 404</li>
            </Breadcrumb>

            <div className='section section-margin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='error_form'>
                                <h1 className='title'>404</h1>
                                <h2 className='sub-title'>
                                    Opps! PAGE NOT BE FOUND
                                </h2>
                                <p>
                                    Sorry but the page you are looking for does
                                    not exist, have been
                                    <br /> removed, name changed or is
                                    temporarily unavailable.
                                </p>
                                <form
                                    className='search-form-error mb-8'
                                    action='#'>
                                    <input
                                        className='input-text'
                                        placeholder='Search...'
                                        type='text'
                                    />
                                    <button
                                        className='submit-btn'
                                        type='submit'>
                                        <i className='fa fa-search'></i>
                                    </button>
                                </form>
                                <a
                                    href='index.html'
                                    className='btn btn-primary btn-hover-dark rounded-0'>
                                    Back to home page
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
