import React from 'react';
import VND from '../../configs/VNDCurrency';

interface CartItemProps {
    item: any;
    index: number;
    onUpdateCart: (index: number, value: 1 | -1) => void;
}

export default function CartItem({ item, index, onUpdateCart }: CartItemProps) {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img src={item.img[0]} alt="" className="img-fluid" />
                    <span className="item-name">{item.name}</span>
                </div>
            </td>
            <td>
                <span>{VND(item.price)}</span>
            </td>
            <td style={{ position: 'relative' }}>
                <div className="counter-wrapper">
                    <p className="minus" onClick={() => onUpdateCart(index, -1)}>
                        -
                    </p>
                    <p>{item.count || 1}</p>
                    <p className="plus" onClick={() => onUpdateCart(index, 1)}>
                        +
                    </p>
                </div>
            </td>
            <td>
                <span>{VND(item.price * item.count || item.price)}</span>
            </td>
            <td>
                <i className="fas fa-trash text-danger"></i>
            </td>
        </tr>
    );
}
