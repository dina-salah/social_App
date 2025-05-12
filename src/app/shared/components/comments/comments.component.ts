import { DatePipe } from '@angular/common';
import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { CommentsService } from '../../../core/services/comments/comments.service';
import { Icomment } from '../../../core/interfaces/Icomment/icomment';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-comments',
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  private readonly commentsService= inject(CommentsService);
  postId :InputSignal<any> = input.required();
  comments :Icomment[] = []; 

  commentForm!:FormGroup ;
  ngOnInit(): void {
    this.getComments();
    this.commentForm = new FormGroup ({
      content: new FormControl(null),
      post: new FormControl(this.postId())
    });
  }

  getComments(){
    this.commentsService.getCommentsPost(this.postId()).subscribe({
      next:(res)=>{
        console.log(res);
        this.comments = res.comments;
      }
    })
  }

  addComment(){
    this.commentsService.createComment(this.commentForm.value).subscribe({
      next:(res)=>{
        this.comments = res.comments;
        console.log(res);
      }
    })
  }

}
