import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {CafeService} from "./cafe/shared/cafe.service";
import {HomeComponent} from './home/home.component';
import {CafeCommonComponent} from './cafe/common/common.component';
import {CafeListComponent} from './cafe/list/list.component';
import {CafeDetailComponent} from './cafe/detail/detail.component';
import {SearchComponent} from './common/search/search.component';
import {CommonHeaderComponent} from './common/header/header.component';

import {TodayHoursPipe, FormatHoursPipe} from './cafe/shared/date.pipes';
//import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
    CafeCommonComponent,
    CafeListComponent,
    CafeDetailComponent, 
    SearchComponent,
    CommonHeaderComponent, 
    HomeComponent,
    TodayHoursPipe,
    FormatHoursPipe
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [CafeService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
