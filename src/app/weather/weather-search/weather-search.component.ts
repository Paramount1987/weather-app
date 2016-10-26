import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

import { WeatherService } from '../../shared/weather-service';
import { WeatherItem }  from '../weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass'],
  providers: [NgForm]
})
export class WeatherSearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  data:any = {};

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.searchStream
      .debounceTime(700)
      .distinctUntilChanged()
      .switchMap( (input:string, index) => this._weatherService.searchWeatherData(input))
      .subscribe(
        data => this.data = data
    )
  }

  onSubmit() {
      const  weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
      this._weatherService.addWeatherItem(weatherItem);
  }

  onSearchLocation(cityName: string) {
    this.searchStream
        .next(cityName);
  }

}
