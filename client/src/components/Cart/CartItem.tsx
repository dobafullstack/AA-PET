import React, { ReactElement } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { removeCart, updateCart } from '../../app/reducers/cart.reducer';
import VND from '../../configs/VND';
import { CartProduct } from '../../models/CartModel';

interface Props {
    item: CartProduct;
}

export default function CartItem({ item }: Props): ReactElement {
    const dispatch = useAppDispatch();

    return (
        <tr>
            <td className='pro-thumbnail'>
                <a href='#'>
                    <img
                        className='fit-image'
                        src={item.product.images[0]}
                        alt='Product'
                        style={{
                            width: 120,
                            height: 120,
                        }}
                    />
                </a>
            </td>
            <td className='pro-title'>
                <a href='#'>{item.product.name}</a>
            </td>
            <td className='pro-price'>
                <span>{VND(item.product.price)}</span>
            </td>
            <td className='pro-quantity'>
                <div className='quantity'>
                    <div className='cart-plus-minus'>
                        <input className='cart-plus-minus-box' value={item.count} type='text' />
                        <div
                            className='dec qtybutton'
                            onClick={() =>
                                dispatch(
                                    updateCart({
                                        _id: item.product._id,
                                        count: -1,
                                        name: item.product.name,
                                    })
                                )
                            }
                        >
                            -
                        </div>
                        <div
                            className='inc qtybutton'
                            onClick={() =>
                                dispatch(
                                    updateCart({
                                        _id: item.product._id,
                                        count: 1,
                                        name: item.product.name,
                                    })
                                )
                            }
                        >
                            +
                        </div>
                    </div>
                </div>
            </td>
            <td className='pro-subtotal'>
                <span>{VND(item.count * item.product.price)}</span>
            </td>
            <td className='pro-remove'>
                <a
                    href='javascript:void;'
                    onClick={() =>
                        dispatch(removeCart({ _id: item.product._id, name: item.product.name }))
                    }
                >
                    <i className='ti-trash'></i>
                </a>
            </td>
        </tr>
    );
}
