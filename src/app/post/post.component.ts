import {Component, Input, OnInit} from '@angular/core';
import {PostClass} from '../common/post.class';
import {PostsService} from '../posts.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'b-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostClass;
  faTrash = faTrash;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
  }

  deletePost(post: PostClass): void {
    this.postsService.deletePost(post.id);
  }

}
