import { Component, OnInit } from '@angular/core';

import { Profile } from '../weather/profile';
import { WeatherItem }  from '../weather/weather';
import { ProfileService } from '../shared/profile.service';
import { WeatherService } from '../shared/weather-service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  profiles: Profile[];

  constructor(private _profileService: ProfileService, private _weatherService: WeatherService) {
  }

  ngOnInit() {
    this.profiles = this._profileService.getProfiles();
  }

  onSaveNew() {
    const cities = this._weatherService.getWeatherItems().map( (el: WeatherItem) => el.cityName);

    this._profileService.saveNewProfile(cities);
  }

  onLoadProfile(profile: Profile) {
    this._weatherService.clearWeatherItems();

    for(let i = 0; i < profile.cities.length; i++) {
      this._weatherService.searchWeatherData(profile.cities[i])
        .retry()
        .subscribe(
          data => {
            const  weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
            this._weatherService.addWeatherItem(weatherItem);
          }
      )
    }
  }

  onDeleteProfile(event: Event, profile: Profile) {
    event.stopPropagation();
    this._profileService.deleteProfile(profile);
    this._weatherService.clearWeatherItems();
  }

}
