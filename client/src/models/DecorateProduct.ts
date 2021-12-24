import ProductModel from './ProductModel';

export default class DecorateProduct {
    size: 'S' | 'M' | 'L' | 'XL';
    color: 'red' | 'orange' | 'black' | 'grey';
    product: ProductModel;
    newPrice: number;

    mPriceBonus = 10000;
    LPriceBonus = 15000;
    XLPriceBonus = 17000;

    orangePriceBonus = 10000;
    blackPriceBonus = 15000;
    greyPriceBonus = 17000;

    constructor(
        product: ProductModel,
        size: 'S' | 'M' | 'L' | 'XL',
        color: 'red' | 'orange' | 'black' | 'grey'
    ) {
        this.product = product;
        this.size = size;
        this.color = color;
        this.newPrice = product.price;
    }

    setPrice() {
        let newPriceSize;
        switch (this.size) {
            case 'S':
                newPriceSize = 0;
                break;
            case 'M':
                newPriceSize = this.mPriceBonus;
                break;
            case 'L':
                newPriceSize = this.LPriceBonus;
                break;
            case 'XL':
                newPriceSize = this.XLPriceBonus;
                break;
        }

        let newPriceColor;
        switch (this.color) {
            case 'red':
                newPriceColor = 0;
                break;
            case 'orange':
                newPriceColor = this.orangePriceBonus;
                break;
            case 'black':
                newPriceColor = this.blackPriceBonus;
                break;
            case 'grey':
                newPriceColor = this.greyPriceBonus;
                break;
        }

        this.newPrice = this.product.price + newPriceColor + newPriceSize;
    }
}
