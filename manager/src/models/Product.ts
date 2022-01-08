export default class Product {
    _id: string;
    name: string;
    quantity: number;
    saled_count: number;
    price: number;
    discount_value: number;
    images: Array<string>;
    category_detail_id: string;
    description: string;
    accessory: {}
    created_at: string;
    updated_at: string;

    constructor(
        _id: string,
        name: string,
        quantity: number,
        saled_count: number,
        price: number,
        discount_value: number,
        images: Array<string>,
        category_detail_id: string,
        description: string,
        created_at: string,
        updated_at: string,
        accessory: {}
    ) {
        this._id = _id;
        this.name = name;
        this.quantity = quantity;
        this.saled_count = saled_count;
        this.price = price;
        this.discount_value = discount_value;
        this.images = images;
        this.category_detail_id = category_detail_id;
        this.description = description;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.accessory = accessory;
    }
}
