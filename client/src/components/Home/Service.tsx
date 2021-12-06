import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Service({}: Props): ReactElement {
    return (
        <div className="section section-padding">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-n6">

                <div className="col mb-6" data-aos="fade-up" data-aos-duration="1000">
                    
                    <div className="single-cta-wrapper">

                        
                        <div className="cta-icon">
                            <i className="ti-truck"></i>
                        </div>
                        

                        
                        <div className="cta-content">
                            <h4 className="title">Free Shipping</h4>
                            <p>Free shipping on all order</p>
                        </div>
                        

                    </div>
                    
                </div>

                <div className="col mb-6" data-aos="fade-up" data-aos-duration="1100">
                    
                    <div className="single-cta-wrapper">

                        
                        <div className="cta-icon">
                            <i className="ti-headphone-alt"></i>
                        </div>
                        

                        
                        <div className="cta-content">
                            <h4 className="title">Online Support</h4>
                            <p>Online live support 24/7</p>
                        </div>
                        

                    </div>
                    
                </div>

                <div className="col mb-6" data-aos="fade-up" data-aos-duration="1200">
                    
                    <div className="single-cta-wrapper">

                        
                        <div className="cta-icon">
                            <i className="ti-bar-chart"></i>
                        </div>
                        

                        
                        <div className="cta-content">
                            <h4 className="title">Money Return</h4>
                            <p>Back guarantee under 5 days</p>
                        </div>
                        

                    </div>
                    
                </div>

            </div>
        </div>
    </div>
    )
}
