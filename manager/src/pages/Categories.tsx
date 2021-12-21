import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label } from "reactstrap";
import categoryApi from "../api/categoryApi";
import { ModalLayout } from "../components";
import Td from "../components/Common/Td";
import { CommonLayout } from "../Layout/AppLayout";
import Category from "../models/Category";
import formatDate from "../utils/formatDate";
import { toast } from "react-toastify";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Categories({}: Props): ReactElement {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchData = () => {
        categoryApi
            .getAllCategories()
            .then((res) => setCategories(res.result))
            .catch((err) => console.log(err));
    };

    const onDelete = async (id: string) => {
        try {
            const {result, code} = await categoryApi.deleteCategory(id);

            if (code !== 200) toast.error(result)
            else toast.success(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CommonLayout
            AddModal={AddModal}
            EditModal={EditModal}
            onReload={fetchData}
            onDelete={onDelete}>
            <h4 className='card-title'>Striped Table</h4>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Category name</th>
                            <th>Category Detail</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length >= 0 &&
                            categories.map((category) => (
                                <tr onClick={(e) => null}>
                                    <Td className='py-1' id={category._id}>
                                        <Link to={`/category/${category._id}`}>
                                            {category.name.toLocaleUpperCase()}
                                        </Link>
                                    </Td>
                                    <Td id={category._id}>
                                        {category.childCate.length}
                                    </Td>
                                    <Td id={category._id}>
                                        {formatDate(category.created_at)}
                                    </Td>
                                    <Td id={category._id}>
                                        {formatDate(category.updated_at)}
                                    </Td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </CommonLayout>
    );
}

function AddModal({ isOpen, setIsOpen }: ModalProps): ReactElement {
    const [name, setName] = useState("");
    const onSubmit = async () => {
        try {
            const { code, result } = await categoryApi.createCategory({ name });

            if (code !== 201) {
                toast.error(result);
            } else {
                toast.success(result);
            }
        } catch (error) {
            console.log(error);
        }

        setName("");
        setIsOpen(false);
    };

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            <FormGroup>
                <Label>Category Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
        </ModalLayout>
    );
}

function EditModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const [name, setName] = useState("");
    const onSubmit = async () => {
        try {
            const {code, result} = await categoryApi.updateCategory(selectedItem, {name});

            if (code !== 200) toast.error(result)
            else toast.success(result)
        } catch (error) {
            console.log(error);
        }

        setIsOpen(false);
    };

    useEffect(() => {
        categoryApi
            .getCategoryDetail(selectedItem)
            .then((res) => setName(res.result.name))
            .catch((err) => console.log(err));
    }, [selectedItem]);

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            <FormGroup>
                <Label>Category Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormGroup>
        </ModalLayout>
    );
}
