import ProductModel from './ProductModel';

interface IProxy<T>{
    getProducts(): Array<T>;
}
export class RealObject<T> implements IProxy<T> {
    protected list: Array<T>;

    constructor(list: Array<T>) {
        this.list = list;
    }

    getProducts() {
        return this.list;
    }
}

export class Proxy<T> implements IProxy<T> {
    limit: number;
    private realObject: RealObject<T>

    constructor(list: Array<T>, limit: number) {
        this.limit = limit;
        this.realObject = new RealObject<T>(list);
    }

    getProducts(): T[] {
        return this.realObject.getProducts().slice(0, this.limit);
    }
}
