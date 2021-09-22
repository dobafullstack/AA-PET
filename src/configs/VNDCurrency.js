export default (number) => {
    console.log(typeof(number))

    if (typeof(number) !== 'number') {
        return null;
    }

    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });;
}