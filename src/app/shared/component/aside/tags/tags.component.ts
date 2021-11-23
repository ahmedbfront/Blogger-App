import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})

export class TagsComponent implements OnInit {

  tags;

  constructor(
    private router: Router,
    private blogServ: BlogService,
  ) { }

  ngOnInit(): void {
    this.getAllTags()
  }

  pageTitle(title: string) {
    this.blogServ.pageTitle(title)
  }

  getAllTags() {
    this.blogServ.getAllTags().subscribe(res => {
      const filterData = [...new Map(res.map((item: any) => [JSON.stringify(item), item])).values()];

      this.tags = filterData

    })
  }

  categories(name: string) {
    this.router.navigate([`categories/${name}`]);
  }

}
