import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './page/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page',
    loadChildren: () => import ('./page/page.module').then(m => m.PageModule)
  },
  {
    path: '',
    loadChildren: () => import ('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
