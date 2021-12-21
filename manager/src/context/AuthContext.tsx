import React, { Dispatch, SetStateAction, useState } from "react";

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
