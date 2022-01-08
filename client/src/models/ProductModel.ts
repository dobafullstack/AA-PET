export default class ProductModel {
    _id: string;
    name: string;
    description: string;
    quantity: number;
    saled_count: number;
    discount_value: number;
    price: number;
    status: number;
    category_detail_id: string;
    images: Array<string>;
    created_at: string;
    updated_at: string;
    reviews: {
        user: string;
        point: number;
        comment: string;
        _id: string;
    }[];
    rating_point: number;

    constructor(
        _id: string,
        name: string,
        description: string,
        quantity: number,
        saled_count: number,
        discount_value: number,
        price: number,
        status: number,
        category_detail_id: string,
        images: Array<string>,
        created_at: string,
        updated_at: string,
        reviews: {
            user: string;
            point: number;
            comment: string;
            _id: string;
        }[],
        rating_point: number
    ) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.saled_count = saled_count;
        this.discount_value = discount_value;
        this.price = price;
        this.status = status;
        this.category_detail_id = category_detail_id;
        this.images = images;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.reviews = reviews;
        this.rating_point = rating_point;
    }
}
