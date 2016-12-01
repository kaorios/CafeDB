import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

import {Cafe} from '../shared/cafe';
import {CafeService} from '../shared/cafe.service';

@Component ({
  selector: 'cafe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CafeListComponent implements OnInit {
  public cafes: Observable<Cafe>;
  private find_words: string;

  constructor(private activatedRoute: ActivatedRoute, private cafeService: CafeService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.find_words = param['find_words'];
        console.log("words:" + this.find_words);
      });
    if (this.find_words) {
      this.cafes = this.cafeService.searchCafes(this.find_words);
    } else {
      this.cafes = this.cafeService.getCafes();
    }
  }
}
