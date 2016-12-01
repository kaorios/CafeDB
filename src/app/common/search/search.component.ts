import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import {Cafe} from '../../cafe/shared/cafe';
import {CafeService} from '../../cafe/shared/cafe.service'

@Component ({
  selector: 'common-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  constructor(private http: Http, private router: Router) {
  }

  searchForCafe(words: string) {
    this.router.navigate(['/cafe'], { queryParams: { find_words: words } });
  }
}
