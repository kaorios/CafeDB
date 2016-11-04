import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Cafe} from './cafe';
import {CafeService} from './cafe.service'

@Component ({
  selector: 'cafe-list',
  template: `
    <h2>CafeList</h2>
    <ul class="cafes">
      <li *ngFor="let cafe of cafes"
        [class.selected] = "cafe === selectedCafe"
        (click) = "gotoDetail(cafe)">
        {{cafe.name}}
      </li>
    </ul>
  `,
  providers: [CafeService]
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[];
  selectedCafe: Cafe;

  constructor(
    private router: Router,
    private cafeService: CafeService
  ) {}

  getCafes(): void {
    this.cafeService.getCafes().then(cafes => this.cafes = cafes);
  }

  ngOnInit(): void {
    this.getCafes();
  }

  onSelect(cafe: Cafe): void {
    this.selectedCafe = cafe;
  }

  gotoDetail(cafe: Cafe): void {
    this.selectedCafe = cafe;
    this.router.navigate(['/detail', this.selectedCafe.id]);
  }
}