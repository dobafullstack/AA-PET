type User = {
    _id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    role: string;
    wishList: Array<string>
};

export default User;