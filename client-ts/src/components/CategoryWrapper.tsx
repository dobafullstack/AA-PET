import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container } from 'reactstrap';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import AccessoriesImg from '../assets/images/accessories.png';
import BowlImg from '../assets/images/bowl.png';
import ColarBeltImg from '../assets/images/colar-belt.png';
import DressesImg from '../assets/images/dresses.png';
import FoodImg from '../assets/images/food.png';
import LeashesImg from '../assets/images/leashes.png';
import { BreadcrumbBar } from './Common';


export default function CategoryWrapper() {
    const breadcrumbs = useBreadcrumbs();
    const match = useRouteMatch();

    return (
        <div style={{ paddingHorizontal: '10rem' }}>
            <BreadcrumbBar breadcrumbs={breadcrumbs} />
            <h1 className="text-center mt-3" style={{ fontFamily: 'Spartan', fontWeight: '400' }}>
                CATEGORY
            </h1>
            <p className="text-center fw-300" style={{ fontFamily: 'Spartan', fontWeight: '300' }}>
                What are you looking for?
            </p>
            <Container className="d-flex justify-content-center">
                <div className="d-flex flex-column m-3">
                    <div style={style.wrapper}>
                        <Link to={`${match.path}/Food`}>
                            <img src={FoodImg} alt="" className="img-fluid my-3" />
                        </Link>
                        <p style={style.p}>Food</p>
                    </div>
                    <div style={style.wrapper}>
                        <Link to={`${match.path}/Colar Belt`}>
                            <img src={ColarBeltImg} alt="" className="img-fluid my-3" />
                        </Link>
                        <p style={style.p}>Colar Belt</p>
                    </div>
                </div>
                <div className="d-flex flex-column m-3">
                    <div style={style.wrapper}>
                        <Link to={`${match.path}/Leashes`}>
                            <img src={LeashesImg} alt="" className="img-fluid my-3" />
                        </Link>
                        <p style={style.p}>Leashes</p>
                    </div>
                    <div style={style.wrapper}>
                        <Link to={`${match.path}/Dresses`}>
                            <img src={DressesImg} alt="" className="img-fluid my-3" />
                        </Link>
                        <p style={style.p}>Dresses</p>
                    </div>
                </div>
                <div className="d-flex flex-column m-3">
                    <div style={style.wrapper}>
                        <Link to={`${match.path}/Accessories`}>
                            <img src={AccessoriesImg} alt="" className="img-fluid my-3" />
                        </Link>
                        <p style={style.p}>Accessories</p>
                    </div>
                    <div style={style.wrapper}>
                        <Link to={`${match.path}/Bowl`}>
                            <img src={BowlImg} alt="" className="img-fluid my-3" />
                        </Link>
                        <p style={style.p}>Bowl</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

const style = {
    p: {
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '1.5rem',
    },
    wrapper: {
        position: 'relative'
    }
};
