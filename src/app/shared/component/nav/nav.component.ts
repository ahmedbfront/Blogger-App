import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  openNav = false;

  search: FormGroup;

  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(
    private formB: FormBuilder,
    private router: Router,
    private blogServ: BlogService,
    
  ) { }
  
  ngOnInit(): void {
    this.fBuild();
  }

  openedNav() {
    this.openNav = !this.openNav
  }

  closeNav(title: string) {
    this.openNav = false
    this.blogServ.pageTitle(title)
  }

  pageTitle(title: string) {
    this.blogServ.pageTitle(title)
  }

  searchPost() {
    this.router.navigate([`search/${this.search.get('title').value}`]);
  }

  fBuild() {
    this.search = this.formB.group({
      title: '',
    });
  }

}
