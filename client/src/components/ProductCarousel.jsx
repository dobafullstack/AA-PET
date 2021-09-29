import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

export default function ProductCarousel({ product }) {
    const [current, setCurrent] = useState(0);

    if (!Array.isArray(product.images) || product.images.length <= 0) return null;

    const next = () => {
        setCurrent(current === product.images.length - 1 ? 0 : current + 1);
    };

    const prev = () => {
        setCurrent(current === 0 ? product.images.length - 1 : current - 1);
    };

    return (
        <div className="left">
            <div className="main-img">
                {product.images.map((item, index) => (
                    <img
                        width="0"
                        src={item}
                        alt=""
                        className={`img-fluid ${index === current ? 'slide-active' : 'slide'}`}
                    />
                ))}
                <i class="fal fa-arrow-left" onClick={() => prev()}></i>
                <i class="fal fa-arrow-right" onClick={() => next()}></i>
            </div>

            <Row className="sub-img mt-3">
                {product.images.map((item, index) => (
                    <Col xl={3}>
                        <img src={item} alt="" className="img-fluid" onClick={() => setCurrent(index)}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
