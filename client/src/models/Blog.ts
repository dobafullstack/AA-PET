export default class Blog {
    title: string;
    content: string;
    author: string;
    image: string;
    createAt: Date;

    constructor(title: string, content: string, author: string, image: string, createdAt = new Date()){
        this.title = title;
        this.content = content;
        this.author = author;
        this.image = image;
        this.createAt = createdAt;
    }

    getData(){
        return {
            title: this.title,
            content: this.content,
            author: this.author,
            image: this.image,
            createAt: this.createAt,
        }
    }
}