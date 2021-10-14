import { Item1Img, Item2Img, Item3Img } from './../assets/images/index';
import OrderType from "../types/OrderType";

export const orders: OrderType[] = [
    {
        _id: "Order#1",
        code: "Order#1",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "pending",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#2",
        code: "Order#2",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "pending",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#3",
        code: "Order#3",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "success",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#4",
        code: "Order#4",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "success",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#5",
        code: "Order#5",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "success",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#6",
        code: "Order#6",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "success",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#7",
        code: "Order#7",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "canceled",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#8",
        code: "Order#8",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "canceled",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#9",
        code: "Order#9",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "canceled",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#10",
        code: "Order#10",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "canceled",
        totalPrice: 100,
        createdAt: new Date(),
    },
    {
        _id: "Order#11",
        code: "Order#11",
        user_id: "123123",
        delivery_info: {
            name: "Duy Anh",
            phone: "0944609933",
            address: "11G 22st, Binh Hung Hoa A",
        },
        delivery_method: "Best Express",
        payment_method: "Momo",
        products: [
            {
                product_id: {
                    _id: "123123",
                    name: "Fur Hair Brush",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item1Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Cutter",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item2Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 2,
            },
            {
                product_id: {
                    _id: "123123",
                    name: "Nair Remover",
                    category_detail_id: {
                        _id: "afsafsaf",
                        name: "Food",
                        category_id: {
                            _id: "",
                            name: "Food",
                        },
                    },
                    description: "Somethings",
                    img: [Item3Img],
                    price: 100,
                    rating_point: 5,
                },
                count: 1,
            },
        ],
        status: "canceled",
        totalPrice: 100,
        createdAt: new Date(),
    },
];