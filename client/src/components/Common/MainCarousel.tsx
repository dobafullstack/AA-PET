import React, { useState } from 'react';
import slides from '../../utils/Slide.data';

export function MainCarousel() {
    const [current, setCurrent] = useState(0);

    if (!Array.isArray(slides) || slides.length <= 0) return null;

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const chooseImg = (index: number) => {
        setCurrent(index);
    };

    return (
        <section className="slider">
            <i className="fas fa-chevron-left left" onClick={() => prev()}></i>
            <i className="fas fa-chevron-right right" onClick={() => next()}></i>
            {slides.map((item, index) => (
                <div key={index} className={index === current ? 'slide-active' : 'slide'}>
                    {index === current && (
                        <div
                            style={{
                                backgroundImage: `url('${item.img}')`,
                                width: '100%',
                                height: '80vh',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    )}
                </div>
            ))}
            <div className="slider-controller">
                {slides.map((item, index) => (
                    <div
                        className={index === current ? 'item active' : 'item'}
                        key={index}
                        onClick={() => chooseImg(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
}
