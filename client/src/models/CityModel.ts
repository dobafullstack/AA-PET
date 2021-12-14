type CityModel = {
    key: string;
    name: string;
    district: {
        key: string;
        name: string;
    }[]
}

export default CityModel;