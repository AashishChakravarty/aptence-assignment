import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  view = false;
  postData: any;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.posts();
  }

  showSidebar() {
    this.view = !this.view;
  }

  posts() {
    this.postService.getPost().subscribe(res => {
      console.log(res);
      this.postData = res;
    }, error => {
      console.log(error);
    });
  }
}
