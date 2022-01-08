export default function formatDate(string: string){
    const date = new Date(Date.parse(string));

    let day = `${date.getDay()}`;
    let month = `${date.getMonth() === 0 ? 1 : date.getMonth()}`

    if (parseInt(day) < 10) day = `0${day}`;
    if (parseInt(month) < 10) month = `0${month}`;

    return `${day}/${month}/${date.getFullYear()}`;
}