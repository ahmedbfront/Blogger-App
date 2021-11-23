import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports
import { SharedModule } from './shared/shared.module';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SliderComponent } from './views/blog/slider/slider.component';
import { HeaderComponent } from './views/blog/header/header.component';
import { RecentPostsComponent } from './views/blog/recent-posts/recent-posts.component';
import { MostReadComponent } from './views/blog/most-read/most-read.component';
import { FeaturedComponent } from './views/blog/featured/featured.component';
import { DownComponent } from './views/blog/down/down.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RecentPostsComponent,
    MostReadComponent,
    FeaturedComponent,
    DownComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
