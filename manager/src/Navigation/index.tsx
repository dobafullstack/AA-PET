import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components";
import AppLayout from "../Layout/AppLayout";
import { Attributes, Bills, Categories, CategoryDetail, Dashboard, Login, Orders, Products, Roles, Users } from "../pages";

interface Props {}

export default function Navigation({}: Props): ReactElement {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route
                path='/'
                element={
                    <ProtectedRoute>
                        <AppLayout />
                    </ProtectedRoute>
                }>
                <Route index element={<Dashboard />} />
                <Route path='/category'>
                    <Route index element={<Categories />} />
                    <Route path=":categoryId" element={<CategoryDetail />} />
                    <Route path='attribute' element={<Attributes />} />
                </Route>
                <Route path='/product'>
                    <Route index element={<Products />} />
                </Route>
                <Route path='/revenue'>
                    <Route path='order' element={<Orders />} />
                    <Route path='bill' element={<Bills />} />
                </Route>
                <Route path='/auth'>
                    <Route path='user' element={<Users />} />
                    <Route path='role' element={<Roles />} />
                </Route>
            </Route>
        </Routes>
    );
}
