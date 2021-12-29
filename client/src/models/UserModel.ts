type UserModel = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    username: string;
    delivery: Delivery[]
    wishList: Array<string>
}

export type Delivery = {
    _id: string;
    name: string;
    phone: string;
    address: string;
};

export default UserModel;