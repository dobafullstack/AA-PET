import React, { ReactElement } from 'react'
import banner1 from '../../assets/images/banner/banner1.png'
import banner2 from '../../assets/images/banner/banner2.png'

interface Props {
    
}

export default function Banner({}: Props): ReactElement {
    return (
        <div className='section section-margin-bottom'>
            <div className='container'>
                <div className='row mb-n6'>
                    <div
                        className='col-md-6 col-12 mb-6'
                        data-aos='fade-up'
                        data-aos-duration='1000'>
                        <a href='shop.html' className='banner'>
                            <img
                                className='fit-image'
                                src={banner1}
                                alt='Banner Image'
                            />
                        </a>
                    </div>

                    <div
                        className='col-md-6 col-12 mb-6'
                        data-aos='fade-up'
                        data-aos-duration='1500'>
                        <a href='shop.html' className='banner'>
                            <img
                                className='fit-image'
                                src={banner2}
                                alt='Banner Image'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
