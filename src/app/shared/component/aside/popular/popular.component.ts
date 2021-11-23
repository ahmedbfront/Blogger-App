import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent implements OnInit {
  
  allPosts;

  constructor(
    private router: Router,
    private blogServ: BlogService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  pageTitle(title: string) {
    this.blogServ.pageTitle(title)
  }

  getPosts() {
    this.blogServ.getPosts().subscribe(res => {
      this.allPosts = res
    })
  }

  readPost(id: string) {
    this.router.navigate([`article/${id}`]);
  }

  categories(name: string) {
    this.router.navigate([`categories/${name}`]);
  }

}
