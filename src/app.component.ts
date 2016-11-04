import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'my-app',
  template: `
  <h1>{{text}}</h1>
  <a routerLink="/cafes">Cafes</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  text = 'CafeDB'
}
