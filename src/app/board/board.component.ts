import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';

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

}
