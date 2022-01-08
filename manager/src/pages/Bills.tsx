import React, {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { Button } from "reactstrap";
import billApi from "../api/billApi";
import { ModalLayout } from "../components";
import Td from "../components/Common/Td";
import { CommonLayout } from "../Layout/AppLayout";
import Bill from "../models/Bill";
import formatDate from "../utils/formatDate";
import VND from "../utils/VND";

interface Props {}

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedItem: string;
}

export default function Bills({}: Props): ReactElement {
    const [bills, setBills] = useState<Bill[]>([]);

    const fetchingBill = async () =>
        billApi
            .getAllBills()
            .then((res) => setBills(res.result))
            .catch((err) => console.log(err));

    useEffect(() => {
        fetchingBill();
    }, []);

    return (
        <CommonLayout
            onDelete={() => null}
            DetailModal={DetailModal}
            onReload={() => fetchingBill()}>
            <h4 className='card-title'>Striped Table</h4>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Total</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr key={bill._id}>
                                <Td id={bill._id} className='py-1'>
                                    {bill.products.length}
                                </Td>
                                <Td id={bill._id}>{VND(bill.total)}</Td>
                                <Td id={bill._id}>
                                    {formatDate(bill.created_at)}
                                </Td>
                                <Td id={bill._id}>
                                    {formatDate(bill.updated_at)}
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </CommonLayout>
    );
}

function DetailModal({
    isOpen,
    setIsOpen,
    selectedItem,
}: ModalProps): ReactElement {
    const [bill, setBill] = useState<Bill>();
    const onSubmit = () => console.log("asgfaga");

    useEffect(() => {
        selectedItem !== "" &&
            billApi
                .getDetailBill(selectedItem)
                .then((res) => setBill(res.result))
                .catch((err) => console.log(err));
    }, [selectedItem]);

    return (
        <ModalLayout
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onSubmit={onSubmit}
            formik
            title='Detail Bill'>
            {bill && selectedItem !== "" ? (
                <>
                    {bill.products.map((product) => (
                        <div
                            className='d-flex justify-content-between'
                            key={product.product._id}>
                            <strong
                                className='py-1'
                                style={{ maxWidth: "300px" }}>
                                {product.product.name}
                            </strong>
                            <p >x{product.quantity}</p>
                            <p>
                                {VND(product.quantity * product.product.price)}
                            </p>
                        </div>
                    ))}
                    <hr style={{ borderStyle: "dashed" }} />
                    <div className='d-flex justify-content-between'>
                        <strong>Tổng cộng</strong>
                        <p>{VND(bill.total)}</p>
                    </div>
                    <hr style={{ borderStyle: "dashed" }} />
                </>
            ) : null}
            <div className='d-flex justify-content-end mt-4'>
                <Button color='primary' onClick={() => setIsOpen(false)}>Ok</Button>
            </div>
        </ModalLayout>
    );
}
