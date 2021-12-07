export default function (price: number): string {
    return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
