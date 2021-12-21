import React, { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props): ReactElement {
    // const { isLogin } = useContext(AuthContext);

    // if (!isLogin) return <Navigate to='/login' />;

    return <>{children}</>;
}
