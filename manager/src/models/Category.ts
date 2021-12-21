type Category = {
    _id: string;
    name: string;
    childCate: Category[];
    created_at: string;
    updated_at: string;
}

export default Category;