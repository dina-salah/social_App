import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { PostsService } from '../../core/services/posts/posts.service';
import { isPlatformBrowser, DatePipe } from '@angular/common';
import { Posts } from '../../core/interfaces/posts/posts';
import { CommentsComponent } from "../../shared/components/comments/comments.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-timeline',
  imports: [DatePipe, CommentsComponent, FormsModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  private readonly pLATFORM_ID = inject(PLATFORM_ID)
  posts: Posts[]= [];
  content:string = '';
  ImgPost:any;

  ngOnInit(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      this.getPosts();
    }
  }

  getPosts() {
    this.postsService.getAllPost().subscribe({
      next: (res) => {
        this.posts = res.posts;
        console.log(res);
      }
    });
  }

  dropImg(e :Event){
    const trgt = e.target as HTMLInputElement;
    this.ImgPost = trgt!.files![0];
  }

  createPost(){
    const postData = new FormData();

    postData.append('body',this.content);
    postData.append('image',this.ImgPost);
    this.postsService.createPost(postData).subscribe({
      next:(res)=>{
        this.getPosts();
      }
    })
  }

}
