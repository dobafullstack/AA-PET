import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Link, useParams } from "react-router-dom";
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

export default function CategoryDetail({}: Props): ReactElement {
    const [category, setCategory] = useState<Category>();
    const { categoryId } = useParams();

    const fetchData = () =>
        categoryApi
            .getCategoryDetail(categoryId as string)
            .then((res) => setCategory(res.result))
            .catch((err) => console.log(err));

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CommonLayout
            AddModal={AddModal}
            onDelete={() => null}
            EditModal={EditModal}
            onReload={() => fetchData()}>
            <h4 className='card-title'>Striped Table</h4>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Category name</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category &&
                            category.childCate.map((category) => (
                                <tr onClick={(e) => null}>
                                    <Td className='py-1' id={category._id}>
                                        {category.name.toLocaleUpperCase()}
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
    const { categoryId } = useParams();
    const onSubmit = async () => {
        try {
            const { result, code } = await categoryApi.addChild(categoryId as string, {
                name,
            });

            if (code !== 201) toast.error(result);
            else toast.success(result);
        } catch (error) {
            console.log(error);
        }

        setIsOpen(false);
    };

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            <FormGroup>
                <Label>Category Detail Name</Label>
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
    const onSubmit = () => console.log("asgfaga");

    return (
        <ModalLayout isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit}>
            {selectedItem}
        </ModalLayout>
    );
}
