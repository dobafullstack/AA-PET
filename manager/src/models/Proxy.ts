import { Dispatch, SetStateAction } from "react";
import ProductApi from "../api/ProductApi";
import Product from "./Product";

export class RealProducts {
    getProducts() {
        return ProductApi.getAllProducts().then((res) => {
            return res.result;
        });
    }
}

export class ProxyProducts {
    private limit: number;
    private realProduct = new RealProducts();

    constructor(limit: number) {
        this.limit = limit;
    }

    getProducts(setTotalProduct: Dispatch<SetStateAction<number>>) {
        return this.realProduct.getProducts().then((res) => {
            setTotalProduct(res.length);
            return res.slice(0, this.limit);
        });
    }
}
