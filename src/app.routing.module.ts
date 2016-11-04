import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CafeListComponent }      from './Components/cafe.list.component';
import { CafeDetailComponent }      from './Components/cafe.detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '/',
    component: CafeListComponent
  },
  {
    path: 'detail/:id',
    component: CafeDetailComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
