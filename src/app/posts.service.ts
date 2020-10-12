import {Injectable} from '@angular/core';
import {PostModel} from './board/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private POSTS_STORAGE_KEY = 'posts';

  constructor() {
    this.loadStorage();
  }

  private allPosts: PostModel[] = [];

  get posts(): PostModel[] {
    return this.allPosts;
  }

  public createPost(newPost: PostModel): number {
    this.posts.push(newPost);
    this.saveStorage();
    return newPost.id;
  }

  public updatePost(post: PostModel): PostModel {
    if (!this.getPostById(post.id)) {
      throw new Error(`Post '${JSON.stringify(post)}' not found`);
    }
    this.saveStorage();
    return post;
  }

  deletePost(postId: number): void {
    this.allPosts = this.posts.filter(post => post.id !== postId);
    this.saveStorage();
  }

  getPostById(id: number): PostModel {
    id = Number(id);
    return this.posts.find(data => data.id === id);
  }

  getPostsCounter(): number {
    return this.allPosts.length;
  }

  private saveStorage(): void {
    localStorage.setItem(this.POSTS_STORAGE_KEY, JSON.stringify(this.posts));
  }

  private loadStorage(): void {
    const data = localStorage.getItem(this.POSTS_STORAGE_KEY);
    if (data) {
      this.allPosts = JSON.parse(data);
    }
  }

}
