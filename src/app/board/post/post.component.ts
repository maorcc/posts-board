import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../post.model';
import {PostsService} from '../../posts.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'b-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: PostModel;
  faTrash = faTrash;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
  }

  deletePost(post: PostModel): void {
    this.postsService.deletePost(post.id);
  }

}
