import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

import {CafeDetail} from '../shared/cafe';
import {CafeService} from '../shared/cafe.service';

@Component({
  selector: 'cafe-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CafeDetailComponent implements OnInit {
  private id:string;
  public cafeDetail: CafeDetail;
  public contents: string;

  constructor(private route: ActivatedRoute, private cafeService: CafeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'] || '';

      if (this.id) {
        this.cafeService.getCafeDetail(this.id)
          .subscribe(cafedetail => {
            this.cafeDetail = cafedetail;
            this.contents = this.cafeDetail.contents;
          });
      }
    });
  }
}
