import React from "react";
import "../../assets/sass/components/order-item.scss";
import format from "../../configs/FormatDateTime";
import VND from "../../configs/VNDCurrency";
import OrderType from "../../types/OrderType";

interface OrderItemProps {
    order: OrderType;
}

export const OrderItem = ({ order }: OrderItemProps) => {
    return (
        <div className='order-item'>
            <div className='header'>
                <h3>{order.code}</h3>
                <span
                    className={`${
                        order.status === "pending"
                            ? "pending"
                            : order.status === "success"
                            ? "success"
                            : "canceled"
                    }`}>
                    {order.status}
                </span>
            </div>
            <div className='sub-header'>
                <span>{format(order.createdAt)}</span>
                <span>{order.delivery_info.address}</span>
            </div>
            <div className='product-wrapper'>
                {order.products.map((product) => (
                    <div className='product-item' key={product.product_id._id}>
                        <div className='img-wrapper'>
                            <img src={product.product_id.img[0]} alt='' />
                        </div>
                        <div className='product-info'>
                            <p>{product.product_id.name}</p>
                            <span>{VND(product.product_id.price)}</span>
                        </div>
                        <span>x{product.count}</span>
                    </div>
                ))}
            </div>
            <hr />
            <div className='footer'>
                <div className='left'>
                    <span className='total-items'>
                        x{order.products.length} items
                    </span>
                    <span className='total-price'>{VND(order.totalPrice)}</span>
                </div>
                {order.status === "pending" && (
                    <div className='right'>
                        <div className='button success'>
                            <i className='fal fa-check'></i>
                        </div>
                        <div className='button canceled'>
                            <i className='fal fa-times'></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
