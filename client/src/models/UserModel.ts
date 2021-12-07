type UserModel = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    username: string;
    wishList: Array<string>
}

export default UserModel;