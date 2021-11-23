import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

  allPosts;

  observable: Subscription;

  constructor(
    private router: Router,
    private blogServ: BlogService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  pageTitle(title: string) {
  }

  getPosts() {
    this.observable = this.blogServ.getCategories("photography").subscribe(res => {
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
