import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import authApi from "../api/authApi";

type ContextValueType = {
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = React.createContext<ContextValueType>({
    isLogin: false,
    setIsLogin: () => null,
});

interface Props {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
    const [isLogin, setIsLogin] = useState(false);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        const getUser = async () => {
            if (!token) {
                setIsLogin(false);
                return;
            }

            const { code } = await authApi.getUser(token);

            if (code !== 200) setIsLogin(false);
            else setIsLogin(true);
        };

        getUser().catch((err) => console.log(err));
    }, [isLogin]);

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
