import {Injectable} from '@angular/core';

import {Cafe} from './cafe';
import {CAFES} from './mock-cafes';

@Injectable()
export class CafeService {
  getCafes(): Promise<Cafe[]> {
    return Promise.resolve(CAFES)
  }

  getCafe(id: number): Promise<Cafe> {
    return this.getCafes().then(cafes => cafes.find(cafe => cafe.id === id));
  }
}