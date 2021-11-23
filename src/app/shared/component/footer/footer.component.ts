import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  mobile;
  business;
  photography;

  constructor(
    private router: Router,
    private blogServ: BlogService
  ) { }

  ngOnInit(): void {
    this.getMobile();
    this.getBusiness();
    this.getPhotography();
  }

  pageTitle(title: string) {
    this.blogServ.pageTitle(title)
  }


  getMobile() {
    this.blogServ.getCategories('mobile').subscribe(res => {
      this.mobile = res
    })
  }

  getBusiness() {
    this.blogServ.getCategories('business').subscribe(res => {
      this.business = res
    })
  }

  getPhotography() {
    this.blogServ.getCategories('photography').subscribe(res => {
      this.photography = res
    })
  }

  readPost(id: string) {
    this.router.navigate([`article/${id}`]);
  }

  categories(name: string) {
    this.router.navigate([`categories/${name}`]);
  }
}
