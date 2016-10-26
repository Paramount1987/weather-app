import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

import { WeatherService } from './shared/weather-service';
import { ProfileService } from './shared/profile.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
