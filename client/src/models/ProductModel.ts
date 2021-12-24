export default class ProductModel {
    _id: string;
    name: string;
    description: string;
    quantity: number;
    saled_count: number;
    discount_percent: number;
    price: number;
    status: number;
    category_detail_id: string;
    images: Array<string>;
    created_at: string;
    updated_at: string;

    constructor(
        _id: string,
        name: string,
        description: string,
        quantity: number,
        saled_count: number,
        discount_percent: number,
        price: number,
        status: number,
        category_detail_id: string,
        images: Array<string>,
        created_at: string,
        updated_at: string
    ) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.saled_count = saled_count;
        this.discount_percent = discount_percent;
        this.price = price;
        this.status = status;
        this.category_detail_id = category_detail_id;
        this.images = images;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
