type Accessory = {
    _id: string;
    name: string;
    unit: string;
    types: {
        _id: string;
        name: string;
    }[];
};

export default Accessory;