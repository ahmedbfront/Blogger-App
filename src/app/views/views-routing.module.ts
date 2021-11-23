import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'article/:id',
    component: PostsComponent
  },
  {
    path: 'categories/:name',
    component: CategoriesComponent
  },
  {
    path: 'search/:name',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
