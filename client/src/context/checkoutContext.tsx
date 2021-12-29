import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import $ from 'jquery';
import CityModel from '../models/CityModel';
import axiosClient from '../api/axiosClient';
import { CITY_API } from '../constants';
import CartModel from '../models/CartModel';
import { useAppSelector } from '../app/hooks';

interface ContextType {
    cities: CityModel[];
    payment: string;
    isPaid: boolean;
    setIsPaid: Dispatch<SetStateAction<boolean>>;
    setPayment: Dispatch<SetStateAction<'cash' | 'paypal'>>;
    cart: CartModel;
}

export const CheckoutContext = React.createContext<ContextType>({
    cities: [],

    payment: '',
    setPayment: () => null,
    cart: {
        products: [],
        total: 0,
    },
    isPaid: false,
    setIsPaid: () => null,
});

const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [cities, setCities] = useState<CityModel[]>([]);
    const [payment, setPayment] = useState<'cash' | 'paypal'>('cash');
    const [isPaid, setIsPaid] = useState<boolean>(false);
    const cart = useAppSelector((state) => state.cart);

    useEffect(() => {
        $('#showcoupon').on('click', function () {
            $('#checkout_coupon').slideToggle(500);
        });

        $('#cbox').on('click', function () {
            $('#cbox-info').slideToggle(500);
        });
    }, []);

    //fetch api cities
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const cities: CityModel[] = await axiosClient.get(CITY_API);

                setCities(cities);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCities();
    }, []);

    return (
        <CheckoutContext.Provider
            value={{
                cities,

                payment,
                setPayment,
                cart,
                isPaid,
                setIsPaid,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    );
};

export default CheckoutProvider;
