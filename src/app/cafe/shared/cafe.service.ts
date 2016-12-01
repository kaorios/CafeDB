import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Cafe, CafeDetail} from './cafe';

@Injectable()
export class CafeService {
  constructor(private http: Http) { }

  getCafes(): Observable<Cafe> {
    return this.http.get('api/cafes.json')
        .map(this.extractData)
        .catch(this.handleError);
  }
  searchCafes(words: string): Observable<Cafe> {
    return this.http.get('api/' + words + '/cafes.json')
        .map(this.extractData)
        .catch(this.handleError);
  }

  getCafeDetail(id: string): Observable<CafeDetail> {
    return this.http.get('api/' + id + '/cafe.json')
        .map(this.extractData)
        .catch(this.handleError);
  }

  //Data molding
  private extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
          throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json();
      return body.data || { };
  }

  // Error handling
  private handleError (error: any) {
      // In a real world app, we might send the error to remote logging infrastructure
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
  }

}
