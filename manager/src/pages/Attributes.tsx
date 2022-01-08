import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import accessoryApi from "../api/accessoryApi";
import { ModalLayout } from "../components";
import Td from "../components/Common/Td";
import { CommonLayout } from "../Layout/AppLayout";
import Accessory from "../models/Accessory";
import formatDate from "../utils/formatDate";
import { FieldArray, Formik } from "formik";
import mongoose from "mongoose";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
    createAttributeAction,
    deleteAttributeAction,
    editAttributeAction,
    getAllAttributesAction,
    getDetailAttributeAction,
} from "../app/actions/attribute.action";
import Loading from "react-loading";
import MyLoading from "../components/Common/MyLoading";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Attributes({}: Props): ReactElement {
    const { attributes: accessories, loading } = useAppSelector(
        (state) => state.attributeReducer
    );
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useAppDispatch();

    const onFetching = (page: number) =>
        dispatch(getAllAttributesAction(page, setTotalPage));

    const onDelete = (selectedItem: string) =>
        dispatch(deleteAttributeAction(selectedItem));

    useEffect(() => {
        onFetching(currentPage);
    }, [currentPage]);

    return (
        <CommonLayout
            AddModal={AddModal}
            onDelete={onDelete}
            EditModal={EditModal}
            onReload={() => {
                onFetching(1);
                setCurrentPage(1);
            }}>
            <h4 className='card-title'>Attributes</h4>
            {!loading ? (
                <div className='table-responsive'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Field</th>
                                <th>Types</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accessories.map((accessory) => (
                                <tr key={accessory._id}>
                                    <Td id={accessory._id}>{accessory.name}</Td>
                                    <Td id={accessory._id}>
                                        {accessory.field}
                                    </Td>
                                    <Td id={accessory._id}>
                                        {accessory.types.length}
                                    </Td>
                                    <Td id={accessory._id}>
                                        {formatDate(accessory.created_at)}
                                    </Td>
                                    <Td id={accessory._id}>
                                        {formatDate(accessory.updated_at)}
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='mt-5 d-flex justify-content-center'>
                        <Pagination aria-label='Page navigation example'>
                            {Array.apply(0, Array(totalPage)).map(function (
                                x,
                                i
                            ) {
                                return (
                                    <PaginationItem
                                        active={i === currentPage - 1}>
                                        <PaginationLink
                                            onClick={() =>
                                                setCurrentPage(i + 1)
                                            }>
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}
                        </Pagination>
                    </div>
                </div>
            ) : (
                <MyLoading />
            )}
        </CommonLayout>
    );
}

function AddModal({ isOpen, setIsOpen }: ModalProps): ReactElement {
    const dispatch = useAppDispatch();

    const initialValues = {
        name: "",
        field: "",
        types: [],
    };

    const validate = yup.object().shape({
        name: yup.string().required("Tên không thể bỏ trống"),
        field: yup.string().required("Field không thể bỏ trống"),
    });

    const onSubmit = (values: typeof initialValues) => {
        const types = values.types.map((item) => ({
            _id: `${new mongoose.Types.ObjectId()}`,
            name: item,
        }));

        dispatch(createAttributeAction(values.name, values.field, types));
        setIsOpen(false);
    };

    return (
        <ModalLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmit={onSubmit}
            formik>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validate}>
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && touched.name ? (
                                <p className='text-danger'>{errors.name}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Field name</Label>
                            <Input
                                type='text'
                                name='field'
                                value={values.field}
                                onChange={handleChange}
                            />
                            {errors.field && touched.field ? (
                                <p className='text-danger'>{errors.field}</p>
                            ) : null}
                        </FormGroup>
                        <FieldArray name='types'>
                            {({ form, insert, remove }) => (
                                <>
                                    {form.values.types.map(
                                        (item: any, index: number) => (
                                            <FormGroup key={index}>
                                                <Label>Type {index + 1}</Label>
                                                <div
                                                    className='d-flex'
                                                    style={{ gap: 10 }}>
                                                    <Input
                                                        name={`types[${index}]`}
                                                        values={
                                                            form.values.types[
                                                                index
                                                            ]
                                                        }
                                                        onChange={handleChange}
                                                    />
                                                    <Button
                                                        color='danger'
                                                        onClick={() =>
                                                            remove(index)
                                                        }>
                                                        -
                                                    </Button>
                                                </div>
                                            </FormGroup>
                                        )
                                    )}

                                    <Button
                                        color='primary'
                                        onClick={() =>
                                            insert(values.types.length, "")
                                        }>
                                        +
                                    </Button>
                                </>
                            )}
                        </FieldArray>
                        <div
                            className='d-flex mt-5 justify-content-end'
                            style={{ gap: 10 }}>
                            <Button color='primary' type='submit'>
                                Submit
                            </Button>
                            <Button
                                color='danger'
                                onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </ModalLayout>
    );
}

function EditModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const { attribute: accessory } = useAppSelector(
        (state) => state.attributeReducer
    );
    const dispatch = useAppDispatch();

    const initialValues = {
        name: accessory.name,
        field: accessory.field,
        types: accessory.types,
    };

    const validate = yup.object().shape({
        name: yup.string().required("Tên không thể bỏ trống"),
        field: yup.string().required("Field không thể bỏ trống"),
    });

    const onSubmit = (values: typeof initialValues) => {
        dispatch(editAttributeAction(selectedItem, values.name, values.field, values.types))
        setIsOpen(false)
    };

    useEffect(() => {
        if (selectedItem !== "") {
            dispatch(getDetailAttributeAction(selectedItem));
        }
    }, [selectedItem]);

    return (
        <ModalLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmit={onSubmit}
            formik>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={onSubmit}
                validationSchema={validate}>
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && touched.name ? (
                                <p className='text-danger'>{errors.name}</p>
                            ) : null}
                        </FormGroup>
                        <FormGroup>
                            <Label>Field name</Label>
                            <Input
                                type='text'
                                name='field'
                                value={values.field}
                                onChange={handleChange}
                            />
                            {errors.field && touched.field ? (
                                <p className='text-danger'>{errors.field}</p>
                            ) : null}
                        </FormGroup>
                        <FieldArray name='types'>
                            {({ form, insert, remove }) => (
                                <>
                                    {form.values.types.map(
                                        (item: any, index: number) => (
                                            <FormGroup key={item._id}>
                                                <div
                                                    className='d-flex'
                                                    style={{ gap: 10 }}>
                                                    <Input
                                                        name={`types[${index}].name`}
                                                        onChange={handleChange}
                                                        value={item.name}
                                                    />
                                                    <Button
                                                        color='danger'
                                                        onClick={() =>
                                                            remove(index)
                                                        }>
                                                        -
                                                    </Button>
                                                </div>
                                            </FormGroup>
                                        )
                                    )}

                                    <Button
                                        color='primary'
                                        onClick={() =>
                                            insert(values.types.length, {
                                                name: "",
                                                _id: `${new mongoose.Types.ObjectId()}`,
                                            })
                                        }>
                                        +
                                    </Button>
                                </>
                            )}
                        </FieldArray>
                        <div
                            className='d-flex mt-5 justify-content-end'
                            style={{ gap: 10 }}>
                            <Button color='primary' type='submit'>
                                Submit
                            </Button>
                            <Button
                                color='danger'
                                onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </ModalLayout>
    );
}
