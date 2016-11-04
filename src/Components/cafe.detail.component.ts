import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Cafe} from './cafe';
import {CafeService} from './cafe.service';

@Component ({
  selector: 'cafe-detail',
  template: `
  <h2>Detail</h2>
  <div *ngIf="cafe">
    <h2>{{cafe.name}}</h2>
  </div>
  <button (click) = "goBack()">Back</button>
  `
})
export class CafeDetailComponent implements OnInit {
  cafe: Cafe;

  constructor(
    private cafeService: CafeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cafeService.getCafe(id).then(cafe => this.cafe = cafe);
    });
  }

  goBack(): void {
    this.location.back();
  }
}