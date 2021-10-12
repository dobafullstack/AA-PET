import CategoryDetailType from "./CategoryDetailType";

export default interface ProductType {
    _id: string;
    name: string;
    img: string[];
    price: number;
    rating_point: number;
    description: string;
    category_detail_id: CategoryDetailType
}