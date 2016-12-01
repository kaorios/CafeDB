import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CafeCommonComponent} from './cafe/common/common.component';
import {CafeListComponent} from './cafe/list/list.component';
import {CafeDetailComponent} from './cafe/detail/detail.component';

export const rootRouterConfig: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'cafe', component: CafeCommonComponent,
    children: [
      {path: '', component: CafeListComponent},
      {path: ':id', component: CafeDetailComponent}
    ]
  }
];

