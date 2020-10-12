import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BoardComponent} from './cardboard/board.component';
import {PostComponent} from './post/post.component';
import {CreatePostDialogComponent} from './create-post-dialog/create-post-dialog.component';
import {TruncatePipe} from './common/truncate.pipe';

@NgModule({
  declarations: [
    BoardComponent,
    PostComponent,
    CreatePostDialogComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
  ]
})
export class BoardModule { }
