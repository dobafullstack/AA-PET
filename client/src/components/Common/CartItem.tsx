import React from 'react';
import VND from '../../configs/VNDCurrency';

interface CartItemProps {
    item: any;
    index: number;
    onUpdateCart: (index: number, value: 1 | -1) => void;
    onRemoveCart: (index: number) => void;
}

export default function CartItem({ item: { product, count }, index, onUpdateCart, onRemoveCart }: CartItemProps) {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img src={product.img[0]} alt="" className="img-fluid" />
                    <span className="item-name">{product.name}</span>
                </div>
            </td>
            <td>
                <span>{VND(product.price)}</span>
            </td>
            <td style={{ position: 'relative' }}>
                <div className="counter-wrapper">
                    <p className="minus" onClick={() => {
                        if (count === 1){
                            return
                        }
                        onUpdateCart(index, -1);
                    }}>
                        -
                    </p>
                    <p>{count || 1}</p>
                    <p className="plus" onClick={() => onUpdateCart(index, 1)}>
                        +
                    </p>
                </div>
            </td>
            <td>
                <span className="me-5">{VND(product.price * count)}</span>
            </td>
            <td>
                <i className="fas fa-trash text-danger" onClick={() => onRemoveCart(index)}></i>
            </td>
        </tr>
    );
}
