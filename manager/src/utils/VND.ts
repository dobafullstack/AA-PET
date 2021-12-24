export default function VND(price: number){
    return price.toLocaleString("vi", { style: "currency", currency: "VND" });
}