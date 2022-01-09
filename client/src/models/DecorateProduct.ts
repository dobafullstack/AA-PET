import ProductModel from './ProductModel';
interface Component {
    getPrice(): number;
    getName(): string;
}

export default class SimpleProduct implements Component {
    product: ProductModel;

    constructor(product: ProductModel) {
        this.product = product;
    }
    getPrice(): number {
        return this.product.price;
    }
    getName(): string {
        return this.product.name;
    }
}

class Decorator implements Component {
    protected simpleProduct: Component;

    constructor(simpleProduct: Component) {
        this.simpleProduct = simpleProduct;
    }

    getPrice(): number {
        return this.simpleProduct.getPrice();
    }

    getName(): string {
        return this.simpleProduct.getName();
    }
}

export class DecorSize extends Decorator {
    size: 'S' | 'M' | 'L' | 'XL';

    mPriceBonus = 10000;
    LPriceBonus = 15000;
    XLPriceBonus = 17000;

    constructor(size: 'S' | 'M' | 'L' | 'XL', simpleProduct: Component){
        super(simpleProduct);
        this.size = size;
    };

    public getPrice(): number {
        let newPrice = 0;

        switch (this.size) {
            case 'S':
                newPrice = 0;
                break;
            case 'M':
                newPrice = this.mPriceBonus;
                break;
            case 'L':
                newPrice = this.LPriceBonus;
                break;
            case 'XL':
                newPrice = this.XLPriceBonus;
                break;
        }

        return super.getPrice() + newPrice;
    }

    public getName(): string {
        let newName;
        switch (this.size) {
            case 'S':
                newName = 'Size S';
                break;
            case 'M':
                newName = 'Size M';
                break;
            case 'L':
                newName = 'Size L';
                break;
            case 'XL':
                newName = 'Size XL';
                break;
        }

        return `${super.getName()} ${newName}`;
    }
}
export class DecorColor extends Decorator {
    color: 'red' | 'orange' | 'black' | 'grey';

    orangePriceBonus = 10000;
    blackPriceBonus = 15000;
    greyPriceBonus = 17000;

    constructor(color: 'red' | 'orange' | 'black' | 'grey', simpleProduct: Component) {
        super(simpleProduct);
        this.color = color;
    }

    public getPrice(): number {
        let newPrice = 0;

        switch (this.color) {
            case 'red':
                newPrice = 0;
                break;
            case 'orange':
                newPrice = this.orangePriceBonus;
                break;
            case 'black':
                newPrice = this.blackPriceBonus;
                break;
            case 'grey':
                newPrice = this.greyPriceBonus;
                break;
        }

        return super.getPrice() + newPrice;
    }

    public getName(): string {
        let newName;

        switch (this.color) {
            case 'red':
                newName = 'Màu đỏ';
                break;
            case 'orange':
                newName = 'Màu cam';
                break;
            case 'black':
                newName = 'Màu đen';
                break;
            case 'grey':
                newName = 'Màu xám';
                break;
        }

        return `${super.getName()} ${newName}`;
    }
}
