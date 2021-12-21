export default function formatDate(string: string){
    const date = new Date(Date.parse(string));

    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
}