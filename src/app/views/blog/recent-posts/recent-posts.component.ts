import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})

export class RecentPostsComponent implements OnInit, OnDestroy {

  allPosts;

  observable: Subscription;

  constructor(
    private router: Router,
    private blogServ: BlogService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.observable = this.blogServ.getCategories("food").subscribe(res => {
      this.allPosts = res
    })
  }

  readPost(id: string, title: string) {
    this.router.navigate([`article/${id}`])
    this.blogServ.pageTitle(title)
  }

  categories(name: string, title: string) {
    this.router.navigate([`categories/${name}`])
    this.blogServ.pageTitle(title)
  }
  
  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
