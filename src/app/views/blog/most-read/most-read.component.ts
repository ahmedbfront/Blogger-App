import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-most-read',
  templateUrl: './most-read.component.html',
  styleUrls: ['./most-read.component.scss']
})

export class MostReadComponent implements OnInit, OnDestroy {

  allPosts;
  
  page = 1;
  
  pageSize = 4;
  
  observable: Subscription;

  constructor(
    private router: Router,
    private blogServ: BlogService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.observable = this.blogServ.getPosts().subscribe(res => {
      this.allPosts = res.slice(0,8)
    })
  }

  readPost(id: string, title: string) {
    this.router.navigate([`article/${id}`])
    this.blogServ.pageTitle(title)
  }

  tag(tag: string) {
    this.router.navigate([`article/${tag}`])
  }

  categories(name: string, title: string) {
    this.router.navigate([`categories/${name}`])
    this.blogServ.pageTitle(title)
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
