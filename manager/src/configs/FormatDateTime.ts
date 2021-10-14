const format = (date: Date) => {
    const dateFormat = new Date(date);

    var dateString =
        ('0' + dateFormat.getUTCDate()).slice(-2) +
        '/' +
        ('0' + (dateFormat.getUTCMonth() + 1)).slice(-2) +
        '/' +
        dateFormat.getUTCFullYear();
        // ('0' + date.getUTCHours()).slice(-2) + ':' +
        // ('0' + date.getUTCMinutes()).slice(-2) +':' +
        // ('0' + date.getUTCSeconds()).slice(-2);

    return dateString;
};

export default format;
