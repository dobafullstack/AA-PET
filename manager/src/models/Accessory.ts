type Accessory = {
    _id: string;
    name: string;
    unit: string;
    types: {
        _id: string;
        name: string;
    }[];
    field: string;
    created_at: string;
    updated_at: string;
};

export default Accessory;