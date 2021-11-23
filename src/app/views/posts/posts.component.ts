import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit, OnDestroy {

  article: any;
  comments: any;

  relatedPosts: any;

  tagPost: string;

  snapshot = this.activeRoute.snapshot.params.id;
  
  observable: Subscription;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private blogServ: BlogService,
  ) { }
  
  ngOnInit(): void {
    this.getArticle(this.snapshot)
  }

  getArticle(id: string) {
    this.observable = this.blogServ.getArticle(id).subscribe(res => {
      this.article = res
      this.comments = res?.comments

      this.getCategories(res?.tag)
      this.tagPost = res?.tag
    })
  }

  submitted(event: any){  
    this.observable = this.blogServ.newComment(this.snapshot, event).subscribe(res => {
      this.getArticle(this.snapshot)
    })
  }

  getCategories(tag: string) {
    this.observable = this.blogServ.getCategories(tag).subscribe(res => {
      this.relatedPosts = res
    })
  }

  readPost(id: string, title: string) {
    this.router.navigate([`article/${id}`])
    this.getArticle(id)
    this.getCategories(this.tagPost)
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
