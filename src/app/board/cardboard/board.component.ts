import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../posts.service';
import {PostModel} from '../post.model';

@Component({
  selector: 'b-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
  }

  idTrackFn(_: number, post: PostModel): number {
    return post.id;
  }
}
