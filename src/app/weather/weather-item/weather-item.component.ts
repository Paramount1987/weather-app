import { Component, OnInit, Input } from '@angular/core';

import { WeatherItem }  from '../weather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.sass']
})
export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem: WeatherItem;

  constructor() {
  }

  ngOnInit() {
  }

}
