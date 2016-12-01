import {Component, OnInit,Pipe, PipeTransform} from '@angular/core';

import {Cafe, Hours} from './cafe';

@Pipe({
  name: 'todayhours'
})
export class TodayHoursPipe implements PipeTransform {

  transform(value: Cafe): string {
    var date = new Date();
    var day = date.getDay();
    var  result = value.hours[day].open + ' - ' + value.hours[day].close;
    return result;
  }
}

@Pipe({
  name: 'formathours'
})
export class FormatHoursPipe implements PipeTransform {

  transform(value: Hours): string {
    var  result = value.open + ' - ' + value.close;
    return result;
  }
}
