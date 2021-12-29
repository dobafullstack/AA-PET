import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import Navbar from './Navbar';

interface Props {}

export default function Header({}: Props): ReactElement {
    return (
        <div className='header section'>
            <Navbar />
        </div>
    );
}
