const orders = [
    {
        _id: 'BIO2W4',
        user_id: '123123',
        products: [
            {
                product: {
                    _id: '512',
                    name: 'Fur Hair Brush',
                    img: [
                        'https://ae01.alicdn.com/kf/H5e61d097ff7e4778bd0b758ac406d854K/Double-sided-Pet-Comb-Soft-Brush-Cats-Dogs-Fur-Hair-Brush-Rake-Comb-Hair-Care-Tool.jpg_Q90.jpg_.webp',
                    ],
                    price: 100,
                    rating_point: 5,
                    description: 'dvsdvs',
                    category_detail_id: {
                        _id: '',
                        name: '',
                        category_id: {
                            _id: '',
                            name: '',
                        },
                    },
                },
                count: 1,
            },
            {
                product: {
                    img: [
                        'https://rukminim1.flixcart.com/image/416/416/j4zwvww0/nail-clipper-cutter/g/f/j/original-nail-cutter-01-bell-original-imaevscwf4mkjenb.jpeg?q=70',
                    ],
                    name: 'Nair Cutter',
                    price: 100,
                    _id: '512',
                    rating_point: 5,
                    description: '',
                    category_detail_id: {
                        _id: '',
                        name: '',
                        category_id: {
                            _id: '',
                            name: '',
                        },
                    },
                },
                count: 1,
            },
        ],
        delivery_info: {
            address: '11G 22st, Binh Tan district, HCM city',
            name: 'Duy Anh',
            phone: '0944609933',
        },
        payment_method: 'ABC',
        delivery_method: 'ABC',
        totalPrice: 100,
        status: 'pending',
        createdAt: new Date(),
    },
];

export default orders;
