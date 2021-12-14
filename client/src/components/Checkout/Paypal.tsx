import React, { ReactElement, useContext } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../app/hooks';
import { CheckoutContext } from '../../context/checkoutContext';
import PaypalModel from '../../models/PaypalModel';
import { useNavigate } from 'react-router-dom';

interface Props {}

const PayPalButton = (window as any).paypal.Buttons.driver('react', { React, ReactDOM });

export default function Paypal({}: Props): ReactElement {
    const cart = useAppSelector((state) => state.cart);
    const total = parseInt((cart.total * 0.00004).toFixed());
    const tax = parseInt((cart.total * 0.00004 * 0.01).toFixed());
    const shipping = parseInt((10000 * 0.00004).toFixed());
    const { name, email, phone, address, setIsPaid } = useContext(CheckoutContext);
    const navigate = useNavigate();

    const order: PaypalModel = {
        purchase_units: [
            {
                reference_id: 'Test',
                description: 'Some thing',
                amount: {
                    value: total + tax + shipping,
                    currency_code: 'USD',
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: total,
                        },
                        tax_total: {
                            currency_code: 'USD',
                            value: tax,
                        },
                        shipping: {
                            currency_code: 'USD',
                            value: shipping,
                        },
                    },
                },
                items: cart.products.map((product) => ({
                    name: product.product.name,
                    quantity: product.count,
                    unit_amount: {
                        currency_code: 'USD',
                        value: parseInt((product.product.price * 0.00004).toFixed()),
                    },
                    sku: product.product.name,
                })),
            },
        ],
        returnUrl: '/success',
    };

    function createOrder(data: any, actions: any) {
        // if (name === '' || email === "" || phone === "" || address === ""){
        //     toast.error('Mời nhập thông tin giao hàng trước')
        //     return;
        // }

        return actions.order.create(order);
    }

    function onApprove(data: any, actions: any) {
        console.log({ data, actions });

        // navigate('/success');

        setIsPaid(true)

        return actions.order.capture();
    }

    function onCancel(data: any, actions: any) {
        navigate('/fail');
        console.log({ data, actions });
    }

    function onError(err: any) {
        navigate('/fail');
        console.log(err);
    }

    return (
        <PayPalButton
            createOrder={(data: any, actions: any) => createOrder(data, actions)}
            onApprove={(data: any, actions: any) => onApprove(data, actions)}
            onCancel={(data: any, actions: any) => onCancel(data, actions)}
            onError={(err: any) => onError(err)}
        />
    );
}
