import Blog from './Blog';

export default class BlogPrototype {
    private blog: Blog;

    constructor(blog: Blog) {
        this.blog = blog;
    }

    clone(): Blog {
        const newBlog = new Blog(
            this.blog.title,
            this.blog.content,
            this.blog.author,
            this.blog.image,
            this.blog.createAt
        );

        return newBlog;
    }
}
