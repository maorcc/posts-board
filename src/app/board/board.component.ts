import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public postsService: PostsService) {
  }

  ngOnInit(): void {
  }

}
