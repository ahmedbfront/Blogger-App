import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})

export class DownComponent implements OnInit, OnDestroy {

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
    this.observable = this.blogServ.getCategories("forex").subscribe(res => {
      this.allPosts = res
    })
  }

  readPost(id: string, title: string) {
    this.router.navigate([`article/${id}`])
    this.blogServ.pageTitle(title) 
  }

  categories(name: string) {
    this.router.navigate([`categories/${name}`])
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
