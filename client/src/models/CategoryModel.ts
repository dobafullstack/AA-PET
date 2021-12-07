type CategoryModel = {
    _id: string;
    name: string;
    childCate: CategoryModel[]
    createdAt: string;
    updatedAt: string;
}

export default CategoryModel;