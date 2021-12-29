import React, { ReactElement, useContext } from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../app/hooks';
import { CheckoutContext } from '../../context/checkoutContext';
import PaypalModel from '../../models/PaypalModel';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { initialValues, onSubmit } from '../../pages/Checkout';
import CartModel from '../../models/CartModel';

interface Props {
    values: typeof initialValues;
    cart: CartModel;
    navigate: NavigateFunction;
    userId?: string;
    errors: any;
}

const PayPalButton = (window as any).paypal.Buttons.driver('react', { React, ReactDOM });

export default function Paypal({ values, cart, navigate, userId, errors }: Props): ReactElement {
    let total = 0;
    const { setIsPaid } = useContext(CheckoutContext);

    cart.products.forEach(item => {
        total += parseInt(((item.count * item.product.price) * 0.00004).toFixed(2));
    })

    const order: PaypalModel = {
        purchase_units: [
            {
                reference_id: 'Test',
                description: 'Some thing',
                amount: {
                    value: total,
                    currency_code: 'USD',
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: total,
                        },
                    },
                },
                items: cart.products.map((product) => ({
                    name: product.product.name,
                    quantity: product.count,
                    unit_amount: {
                        currency_code: 'USD',
                        value: parseInt((product.product.price * 0.00004).toFixed(2)),
                    },
                    sku: product.product.name,
                })),
            },
        ],
        returnUrl: '/success',
    };

    function createOrder(data: any, actions: any) {
        return actions.order.create(order);
    }

    function onApprove(data: any, actions: any) {
        setIsPaid(true);

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
