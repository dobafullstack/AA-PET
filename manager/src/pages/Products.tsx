import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import ProductApi from "../api/ProductApi";
import { ModalLayout } from "../components";
import Td from "../components/Common/Td";
import { CommonLayout } from "../Layout/AppLayout";
import Product from "../models/Product";
import formatDate from "../utils/formatDate";
import VND from "../utils/VND";
import { FieldArray, Formik } from "formik";
import Category from "../models/Category";
import categoryApi from "../api/categoryApi";
import { storage } from "../firebase";
import { toast } from "react-toastify";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Products({}: Props): ReactElement {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchData = () => {
        ProductApi.getAllProducts()
            .then((res) => {
                if (res.code === 200) setProducts(res.result);
            })
            .catch((err) => console.log(err));
    };

    const onDelete = async (productId: string) => {
        try {
            const {code, result} = await ProductApi.deleteProducts(productId);

            if (code !== 200){
                toast.error(result)
            }else{
                toast.success(result)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CommonLayout
            AddModal={AddModal}
            EditModal={EditModal}
            onDelete={onDelete}
            onReload={() => fetchData()}>
            <h4 className='card-title'>Striped Table</h4>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Sale count</th>
                            <th>Discount value</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length >= 0 &&
                            products.map((product) => (
                                <tr>
                                    <Td className='py-1' id={product._id}>
                                        <img
                                            src={product.images[0]}
                                            alt='image'
                                        />{" "}
                                    </Td>
                                    <Td id={product._id}>{product.name}</Td>
                                    <Td id={product._id}>
                                        {product.saled_count}
                                    </Td>
                                    <Td id={product._id}>
                                        {product.discount_value}
                                    </Td>
                                    <Td id={product._id}>{product.quantity}</Td>
                                    <Td id={product._id}>
                                        {VND(product.price)}
                                    </Td>
                                    <Td id={product._id}>
                                        {formatDate(product.created_at)}
                                    </Td>
                                    <Td id={product._id}>
                                        {formatDate(product.updated_at)}
                                    </Td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </CommonLayout>
    );
}

function AddModal({
    isOpen,
    setIsOpen,
}: ModalProps): ReactElement {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const getLinkUpload = (
        image: any,
        setFieldValue: any,
        fieldName: string
    ) => {
        console.log(fieldName);

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            () => {},
            (err) => console.log(err),
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setFieldValue(fieldName, url);
                    });
            }
        );
    };

    useEffect(() => {
        categoryApi
            .getAllCategories()
            .then((res) => {
                setCategories(res.result);
                setSelectedCategory(res.result[0]._id);
            })
            .catch((err) => console.log(err));
    }, []);

    const onSubmit = (values: any) => {
        const addProduct = async () => {
            try {
                const {code, result} = await ProductApi.createProducts(values);

                if (code !== 201){
                    toast.error(result);
                }else{
                    toast.success(result);
                    setIsOpen(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        addProduct();
    };

    const initialValues = {
        name: "",
        description: "",
        category_detail_id:
            categories.length === 0 ? "" : categories[0].childCate[0]._id,
        discount_value: 0,
        quantity: 0,
        price: 0,
        images: ["", "", "", ""],
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
                enableReinitialize>
                {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}>
                        <FormGroup>
                            <Label>Product Name</Label>
                            <Input
                                type='text'
                                name='name'
                                onChange={handleChange}
                                value={values.name}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Categories</Label>
                            <select
                                className='form-control'
                                id='exampleFormControlSelect1'
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }>
                                {categories.map((category) => (
                                    <option
                                        value={category._id}
                                        key={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label>Detail category</Label>
                            <select
                                className='form-control'
                                name='category_detail_id'
                                onChange={handleChange}
                                id='exampleFormControlSelect1'>
                                {categories
                                    .find(
                                        (cate) => cate._id === selectedCategory
                                    )
                                    ?.childCate.map((category) => (
                                        <option
                                            value={category._id}
                                            key={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                                onChange={handleChange}
                                value={values.price}
                                name='price'
                                type='number'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Discount value</Label>
                            <Input
                                onChange={handleChange}
                                value={values.discount_value}
                                name='discount_value'
                                type='number'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Quantity</Label>
                            <Input
                                onChange={handleChange}
                                value={values.quantity}
                                name='quantity'
                                type='number'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Description</Label>
                            <Input
                                onChange={handleChange}
                                value={values.description}
                                name='description'
                                type='textarea'
                            />
                        </FormGroup>
                        <FieldArray name='images'>
                            {({ form }) =>
                                form.values.images.map(
                                    (item: any, index: number) => (
                                        <FormGroup>
                                            <Label>Ảnh {index + 1}</Label>
                                            <Input
                                                onChange={(e) => {
                                                    getLinkUpload(
                                                        e.target.files[0],
                                                        setFieldValue,
                                                        `images[${index}]`
                                                    );
                                                }}
                                                name={`images[${index}]`}
                                                type='file'
                                            />
                                        </FormGroup>
                                    )
                                )
                            }
                        </FieldArray>
                        <div className='d-flex justify-content-end'>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                            <Button
                                color='danger'
                                className='ml-3'
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
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [product, setProduct] = useState<Product>();

    const getLinkUpload = (
        image: any,
        setFieldValue: any,
        fieldName: string
    ) => {
        console.log(fieldName);

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            () => {},
            (err) => console.log(err),
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setFieldValue(fieldName, url);
                    });
            }
        );
    };

    useEffect(() => {
        categoryApi
            .getAllCategories()
            .then((res) => {
                setCategories(res.result);
                setSelectedCategory(res.result[0]._id);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        ProductApi.getDetailProduct(selectedItem).then(res => {
            if (res.code === 200) setProduct(res.result as Product)
        }).catch(err => console.log(err))
    }, [selectedItem])

    const onSubmit = (values: any) => console.log(values)

    const initialValues = product
        ? {
              name: product.name,
              description: product.description,
              category_detail_id: product.category_detail_id,
              discount_value: product.discount_value,
              quantity: product.quantity,
              price: product.price,
              images: [product.images[0], product.images[1], product.images[2], product.images[3]],
          }
        : {
              name: "",
              description: "",
              category_detail_id:
                  categories.length === 0 ? "" : categories[0].childCate[0]._id,
              discount_value: 0,
              quantity: 0,
              price: 0,
              images: ["", "", "", ""],
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
                enableReinitialize>
                {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}>
                        <FormGroup>
                            <Label>Product Name</Label>
                            <Input
                                type='text'
                                name='name'
                                onChange={handleChange}
                                value={values.name}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Categories</Label>
                            <select
                                className='form-control'
                                id='exampleFormControlSelect1'
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }>
                                {categories.map((category) => (
                                    <option
                                        value={category._id}
                                        key={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label>Detail category</Label>
                            <select
                                className='form-control'
                                name='category_detail_id'
                                onChange={handleChange}
                                id='exampleFormControlSelect1'>
                                {categories
                                    .find(
                                        (cate) => cate._id === selectedCategory
                                    )
                                    ?.childCate.map((category) => (
                                        <option
                                            value={category._id}
                                            key={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label>Price</Label>
                            <Input
                                onChange={handleChange}
                                value={values.price}
                                name='price'
                                type='number'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Discount value</Label>
                            <Input
                                onChange={handleChange}
                                value={values.discount_value}
                                name='discount_value'
                                type='number'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Quantity</Label>
                            <Input
                                onChange={handleChange}
                                value={values.quantity}
                                name='quantity'
                                type='number'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Description</Label>
                            <Input
                                onChange={handleChange}
                                value={values.description}
                                name='description'
                                type='textarea'
                            />
                        </FormGroup>
                        <FieldArray name='images'>
                            {({ form }) =>
                                form.values.images.map(
                                    (item: any, index: number) => (
                                        <FormGroup>
                                            <Label>Ảnh {index + 1}</Label>
                                            <Input
                                                onChange={(e) => {
                                                    getLinkUpload(
                                                        e.target.files[0],
                                                        setFieldValue,
                                                        `images[${index}]`
                                                    );
                                                }}
                                                name={`images[${index}]`}
                                                type='file'
                                            />
                                        </FormGroup>
                                    )
                                )
                            }
                        </FieldArray>
                        <div className='d-flex justify-content-end'>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                            <Button
                                color='danger'
                                className='ml-3'
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
