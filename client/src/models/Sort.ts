import ProductModel from "./ProductModel";

interface SortStrategy {
    sort(products: Array<ProductModel>): void;
}

export class SortByNameAZ implements SortStrategy{
    sort(products: ProductModel[]): void {
        products.sort((a: ProductModel, b: ProductModel) => a.name.localeCompare(b.name))
    }
}

export class SortByNameZA implements SortStrategy{
    sort(products: ProductModel[]): void {
        products.sort((a: ProductModel, b: ProductModel) => b.name.localeCompare(a.name));
    }
}

export class SortByPriceHighToLow implements SortStrategy{
    sort(products: ProductModel[]): void {
        products.sort((a: ProductModel, b: ProductModel) => b.price - a.price);
    }
}

export class SortByPriceLowToHigh implements SortStrategy{
    sort(products: ProductModel[]): void {
        products.sort((a: ProductModel, b: ProductModel) => a.price - b.price);
    }
}

export class SortedList {
    private sortStrategy: SortStrategy;
    public products: Array<ProductModel>;

    constructor(sortStrategy: SortStrategy, products: Array<ProductModel>){
        this.sortStrategy = sortStrategy;
        this.products = products;
    };

    public sort(): void{
        this.sortStrategy.sort(this.products);
    }
}