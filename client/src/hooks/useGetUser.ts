import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import UserType from '../types/UserType';
import { GetUser } from '../api/authApi';

const useGetUser = () => {
    const [user, setUser] = useState<UserType>({
        _id: "",
        address: "",
        email: "",
        name: "",
        phone: ""
    });

    useEffect(() => {
        const fetchUser = async () => {
            const {result, error, code} = await GetUser();

            if (code === 200 && error == null){
                setUser(result);
            }
        }

        fetchUser();
    }, [])

    return user;
};

export default useGetUser;
