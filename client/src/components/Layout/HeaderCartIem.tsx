import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { removeCart } from '../../app/reducers/cart.reducer';
import VND from '../../configs/VND';
import { CartProduct } from '../../models/CartModel';
import ProductModel from '../../models/ProductModel';

interface Props {
    product: CartProduct;
}

export default function HeaderCartIem({ product }: Props): ReactElement {
    const dispatch = useAppDispatch();

    return (
        <div className='cart-product-inner mb-4 pb-4 border-bottom'>
            <div className='single-cart-product'>
                <div className='cart-product-thumb'>
                    <Link to={`/product/${product.product._id}`}>
                        <img
                            src={product.product.images[0]}
                            alt='Cart Product'
                            style={{
                                width: 80,
                                height: 80,
                            }}
                        />
                    </Link>
                </div>
                <div className='cart-product-content'>
                    <h3 className='title'>
                        <Link to={`/product/${product.product._id}`}>{product.product.name}</Link>
                    </h3>
                    <div className='product-quty-price'>
                        <span className='cart-quantity'>
                            Qty: <strong className='text-primary'>{product.count}</strong>
                        </span>
                        <span className='price'>
                            <span className='new'>{VND(product.product.price)}</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className='cart-product-remove'>
                <a
                    href='javascript:void'
                    onClick={() =>
                        dispatch(
                            removeCart({ _id: product.product._id, name: product.product.name })
                        )
                    }
                >
                    <i className='icon-close'></i>
                </a>
            </div>
        </div>
    );
}
