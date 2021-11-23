import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';

// Imports
import { SharedModule } from '../shared/shared.module';

// Component
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PostsComponent,
    CategoriesComponent,
    CommentComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    
  ]
})
export class ViewsModule { }
