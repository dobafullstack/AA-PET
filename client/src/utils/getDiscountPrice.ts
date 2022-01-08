export default function(price: number, discount: number){
    if (discount > 0 ){
        return price * ((100 - discount) / 100)
    }

    return null;
}