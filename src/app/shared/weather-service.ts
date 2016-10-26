import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { Http } from '@angular/http';

import { WEATHER_ITEMS }  from '../weather/weather.data';
import { WeatherItem }  from '../weather/weather';


@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  clearWeatherItems() {
    WEATHER_ITEMS.splice(0);
  }

  searchWeatherData(cityName: string): Observable<any> {
    if(!cityName) cityName = 'k';
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=27801575c48007c245a45bbc5a3b9246&units=metric')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }

}
