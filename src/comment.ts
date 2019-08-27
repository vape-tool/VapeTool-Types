import {Author} from "./index";

export default class Comment {
    author: Author;
    content: string;
    timestamp: any;

    constructor(author: Author, content: string, timestamp: any) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
    }
}
