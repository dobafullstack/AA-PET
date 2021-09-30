import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

export default function ProductCarousel({ product }) {
    const [current, setCurrent] = useState(0);

    if (!Array.isArray(product.img) || product.img.length <= 0) return null;

    const next = () => {
        setCurrent(current === product.img.length - 1 ? 0 : current + 1);
    };

    const prev = () => {
        setCurrent(current === 0 ? product.images.length - 1 : current - 1);
    };

    return (
        <div className="left">
            <div className="main-img">
                <div className="img" style={{backgroundImage: `url(${product.img[current]})`}}></div>
                <i class="fal fa-arrow-left" onClick={() => prev()}></i>
                <i class="fal fa-arrow-right" onClick={() => next()}></i>
            </div>

            <Row className="sub-img mt-3">
                {product.img.map((item, index) => (
                    <Col xl={3}>
                        <img
                            src={item}
                            alt=""
                            className="img-fluid"
                            onClick={() => setCurrent(index)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
