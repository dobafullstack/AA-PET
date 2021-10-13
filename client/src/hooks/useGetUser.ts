import { useEffect, useState } from 'react';
import { GetUser } from '../api/authApi';
import UserType from '../types/UserType';

const useGetUser = () => {
    const [user, setUser] = useState<UserType>({
        _id: "",
        address: "",
        email: "",
        name: "",
        phone: ""
    });

    const token = localStorage.getItem('access_token')

    useEffect(() => {
        const fetchUser = async () => {
            const { result, error, code } = await GetUser();

            if (code === 200 && error === null) {
                setUser(result);
            }
        };

        fetchUser();
    }, [token]);

    return user;
};

export default useGetUser;
