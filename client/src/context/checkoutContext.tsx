import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import $ from 'jquery';
import CityModel from '../models/CityModel';
import axiosClient from '../api/axiosClient';
import { CITY_API } from '../constants';
import CartModel from '../models/CartModel';
import { useAppSelector } from '../app/hooks';

interface ContextType {
    cities: CityModel[];
    setCities: Dispatch<SetStateAction<CityModel[]>>;
    selectedCity: string;
    setSelectedCity: Dispatch<SetStateAction<string>>;
    selectedDistrict: string;
    setSelectedDistrict: Dispatch<SetStateAction<string>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    payment: string;
    isPaid: boolean;
    setIsPaid: Dispatch<SetStateAction<boolean>>;
    setPayment: Dispatch<SetStateAction<'cash' | 'momo' | 'paypal'>>;
    cart: CartModel;
}

export const CheckoutContext = React.createContext<ContextType>({
    cities: [],
    setCities: () => null,    
    selectedCity: '',
    setSelectedCity: () => null,
    selectedDistrict: '',
    setSelectedDistrict: () => null,
    name: '',
    setName: () => null,
    username: '',
    setUsername: () => null,
    password: '',
    setPassword: () => null,
    address: '',
    setAddress: () => null,
    email: '',
    setEmail: () => null,
    phone: '',
    setPhone: () => null,
    payment: '',
    setPayment: () => null,
    cart: {
        products: [],
        total: 0
    },
    isPaid: false,
    setIsPaid: () => null
});

const CheckoutProvider = ({children}: {children: React.ReactNode}) => {
    const [cities, setCities] = useState<CityModel[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('Hà Nội');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('Quận Ba Đình');
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [payment, setPayment] = useState<'cash' | 'momo' | 'paypal'>('cash');
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
                setCities,
                selectedCity,
                setSelectedCity,
                selectedDistrict,
                setSelectedDistrict,
                name,
                setName,
                username,
                setUsername,
                password,
                setPassword,
                address,
                setAddress,
                email,
                setEmail,
                phone,
                setPhone,
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
}

export default CheckoutProvider;