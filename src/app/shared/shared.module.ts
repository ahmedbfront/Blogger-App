import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

// Component
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { AsideComponent } from './component/aside/aside.component';
import { SocialComponent } from './component/aside/social/social.component';
import { PopularComponent } from './component/aside/popular/popular.component';
import { TagsComponent } from './component/aside/tags/tags.component';
import { AdsComponent } from './component/aside/ads/ads.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    AsideComponent,
    SocialComponent,
    PopularComponent,
    TagsComponent,
    AdsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ],
  exports: [
    HttpClientModule,
    NavComponent,
    FooterComponent,
    AsideComponent,
    SocialComponent,
    PopularComponent,
    TagsComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule
  ]
})
export class SharedModule { }
