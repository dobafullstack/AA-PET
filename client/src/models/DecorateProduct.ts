import ProductModel from './ProductModel';

export default class DecorateProduct {
    size: 'S' | 'M' | 'L' | 'XL';
    color: 'red' | 'orange' | 'black' | 'grey';
    product: ProductModel;
    newPrice: number;
    newName: string;

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
        this.newName = product.name;
    }

    setPrice() {
        let newPriceSize;
        let newNameSize;
        switch (this.size) {
            case 'S':
                newPriceSize = 0;
                newNameSize = 'Size S';
                break;
            case 'M':
                newPriceSize = this.mPriceBonus;
                newNameSize = "Size M"
                break;
            case 'L':
                newPriceSize = this.LPriceBonus;
                newNameSize = "Size L"
                break;
            case 'XL':
                newPriceSize = this.XLPriceBonus;
                newNameSize = "Size XL"
                break;
        }

        let newPriceColor;
        let newNameColor;
        switch (this.color) {
            case 'red':
                newPriceColor = 0;
                newNameColor = "Màu đỏ"
                break;
            case 'orange':
                newPriceColor = this.orangePriceBonus;
                newNameColor = "Màu cam"
                break;
            case 'black':
                newPriceColor = this.blackPriceBonus;
                newNameColor = "Màu đen"
                break;
            case 'grey':
                newPriceColor = this.greyPriceBonus;
                newNameColor = "Màu xám"
                break;
        }

        this.newName = `${this.product.name} ${newNameSize} ${newNameColor}`
        this.newPrice = this.product.price + newPriceColor + newPriceSize;
    }
}
