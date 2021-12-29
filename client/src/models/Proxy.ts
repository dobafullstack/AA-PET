import ProductModel from './ProductModel';

export class RealObject<T> {
    protected list: Array<T>;

    constructor(list: Array<T>) {
        this.list = list;
    }

    getProduct() {
        return this.list;
    }
}

export class Proxy<T> extends RealObject<T> {
    limit: number;

    constructor(list: Array<T>, limit: number) {
        super(list);
        this.limit = limit;
    }

    getProduct(): T[] {
        return this.list.slice(0, this.limit);
    }
}
