class User {
    _id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    role: string;
    typeStaff: string;
    active: boolean;
    salary: number;

    constructor(
        _id: string,
        name: string,
        username: string,
        email: string,
        phone: string,
        address: string,
        gender: string,
        role: string,
        typeStaff: string,
        active: boolean,
        salary: number
    ) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
        this.role = role;
        this.typeStaff = typeStaff;
        this.active = active;
        this.salary = salary;
    }
}

export default User;
