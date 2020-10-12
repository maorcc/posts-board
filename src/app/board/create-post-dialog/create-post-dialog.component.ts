import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PostsService} from '../../posts.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostModel} from '../post.model';
import {faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'b-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;

  @Input() post: PostModel;
  postForm: FormGroup;
  faEdit = faEdit;
  faPlus = faPlus;

  constructor(private modalService: NgbModal, private postsService: PostsService) {
  }

  get postAuthor(): FormControl {
    return this.postForm.get('postAuthor') as FormControl;
  }

  get postContent(): FormControl {
    return this.postForm.get('postContent') as FormControl;
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      postAuthor: new FormControl('', Validators.required),
      postContent: new FormControl('', Validators.required)
    });
    if (this.post) {
      this.postForm.setValue(
        {
          postAuthor: this.post.author,
          postContent: this.post.content,
        }
      );
    }
  }

  savePost(): boolean {
    const val = this.postForm.value;
    if (this.post) { // Update post
      this.post.author = val.postAuthor;
      this.post.content = val.postContent;
      this.postsService.updatePost(this.post);
    } else { // New post
      const newPost = new PostModel(val.postAuthor, val.postContent);
      this.postsService.createPost(newPost);
      this.postForm.reset();
    }
    return true; // success
  }

}
