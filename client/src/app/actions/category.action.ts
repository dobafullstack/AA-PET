import categoryApi from "../../api/categoryApi";
import CategoryModel from "../../models/CategoryModel";

export default class CategoryAction {
    private static instance: CategoryAction;

    private constructor(){}

    public static getInstance(): CategoryAction{
        if (!CategoryAction.instance){
            CategoryAction.instance = new CategoryAction();
        }

        return CategoryAction.instance;
    }

    public async getCategories(): Promise<CategoryModel[]>{
        const {result} = await categoryApi.getAllCategories();

        return result;
    }
}