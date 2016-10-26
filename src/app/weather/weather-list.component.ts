import { Component, OnInit } from '@angular/core';

import {WeatherItem} from "./weather";
import {WeatherService} from '../shared/weather-service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass']
})
export class WeatherListComponent implements OnInit {
  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
