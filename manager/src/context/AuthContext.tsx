import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import authApi from "../api/authApi";
import User from "../models/User";

type ContextValueType = {
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
    token: string | null | undefined;
    setToken: Dispatch<SetStateAction<string | null | undefined>>;
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
};

export const AuthContext = React.createContext<ContextValueType>({
    isLogin: false,
    setIsLogin: () => null,
    token: "",
    setToken: () => null,
    user: null,
    setUser: () => null,
});

interface Props {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState<string | null | undefined>(
        localStorage.getItem("access_token")
            ? localStorage.getItem("access_token")
            : ""
    );
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            if (!token) {
                setIsLogin(false);
                return;
            }

            const { code, result } = await authApi.getUser(token);

            if (code !== 200) {
                setIsLogin(false)
            }
            else {
                setIsLogin(true);
                setUser(result)
            };
        };

        getUser().catch((err) => console.log(err));
    }, [isLogin]);

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
                token,
                setToken,
                user,
                setUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
