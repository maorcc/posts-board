/**
 * Represents a single Post object
 */
export class PostModel {

  content: string;
  author: string;
  date: Date;
  id: number;

  constructor(author, content) {
    this.date = new Date();
    this.author = author;
    this.content = content;
    this.id = new Date().getTime();
  }

}
