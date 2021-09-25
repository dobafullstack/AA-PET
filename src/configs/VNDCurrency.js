const VND = (number) => {
    if (typeof number !== 'number') {
        return null;
    }

    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};

export default VND;
