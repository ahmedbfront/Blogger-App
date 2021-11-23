import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit, OnDestroy {

  allPosts;

  observable: Subscription;

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>',
     '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor(private router: Router, private blogServ: BlogService) {}

  ngOnInit(): void {
    this.getPosts();
  }


  getPosts() {
    this.observable = this.blogServ.getPosts().subscribe((res) => {
      this.allPosts = res;
    });
  }

  readPost(id: string, title: string) {
    this.router.navigate([`article/${id}`])
    this.blogServ.pageTitle(title)
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
