import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit, OnDestroy {

  allPosts;
  
  page = 1;
  
  pageSize = 6;
  
  tag = this.activeRoute.snapshot.params.name

  observable: Subscription;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private blogServ: BlogService
  ) { }
  ngOnInit(): void {
    this.getCategories(this.tag)

    this.observable = this.activeRoute.url.subscribe(() => {
      const tag = this.activeRoute.snapshot.params.name
      this.tag = tag
      this.getCategories(tag)
    });
  }

  getCategories(tag) {
    this.observable = this.blogServ.getCategories(tag).subscribe(res => {
      this.allPosts = res
    })
  }

  readPost(id: string, title: string) {
    this.router.navigate([`article/${id}`])
    this.blogServ.pageTitle(title)
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
