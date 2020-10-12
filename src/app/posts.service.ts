import {Injectable} from '@angular/core';
import {PostClass} from './common/post.class';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private POSTS_STORAGE_KEY = 'posts';

  constructor() {
    this.loadStorage();
  }

  private _posts: PostClass[] = [];

  get posts(): PostClass[] {
    return this._posts;
  }

  public createPost(newPost: PostClass): number {
    this.posts.push(newPost);
    this.saveStorage();
    return newPost.id;
  }

  public updatePost(post: PostClass): void {
    if (!this.getPostById(post.id)) {
      throw new Error(`Post '${JSON.stringify(post)}' not found`);
    }
    this.saveStorage();
  }

  deletePost(postId: number): void {
    this._posts = this.posts.filter(post => post.id !== postId);
    this.saveStorage();
  }

  getPostById(id: number): PostClass {
    id = Number(id);
    return this.posts.find(data => data.id === id);
  }

  saveStorage(): void {
    localStorage.setItem(this.POSTS_STORAGE_KEY, JSON.stringify(this.posts));
  }

  loadStorage(): void {
    const data = localStorage.getItem(this.POSTS_STORAGE_KEY);
    if (data) {
      this._posts = JSON.parse(data);
    }
  }

}
