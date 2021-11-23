import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, OnDestroy {

  allPosts;

  page = 1;
  pageSize = 8;

  paramName = this.activeRoute.snapshot.params.name
  
  observable: Subscription;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private blogServ: BlogService,
  ) { }

  ngOnInit(): void {
    this.observable = this.activeRoute.url.subscribe(() => {
      const paramName = this.activeRoute.snapshot.params.name
      this.searchPost(paramName);
    });
  }

  searchPost(title: any) {
    this.observable = this.blogServ.searchPost(title).subscribe(res => {
      this.allPosts = res
      console.log(res);
    });
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
