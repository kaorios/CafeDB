import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';
import {CafeListComponent} from './Components/cafe.list.component';
import {CafeDetailComponent} from './Components/cafe.detail.component';
import {CafeService} from './Components/cafe.service'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CafeListComponent,
    CafeDetailComponent
  ],
  providers: [CafeService],
  bootstrap: [AppComponent]
})
export class AppModule {}