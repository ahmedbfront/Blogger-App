import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})

export class FeaturedComponent implements OnInit, OnDestroy {

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
    this.observable = this.blogServ.getCategories("technology").subscribe(res => {
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
