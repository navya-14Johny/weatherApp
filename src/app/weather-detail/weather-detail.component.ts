import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  weatherData:any;
  locationData:any;
  currentLocation : boolean = true;

  public weatherForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private WeatherApiService: WeatherApiService) { 
    this.weatherForm = this.formBuilder.group({
      location:['']
    })
  }

  ngOnInit(): void {
    this.getLocation();
    this.getCurrentLocation();
  }
  // get weather Data by the country name
  getWeatherData(){
    this.currentLocation = false;
    let locationData = this.weatherForm.controls['location'].value;
    this.WeatherApiService.getWeatherData(locationData).subscribe(data=>{
      this.setWeatherData(data);
    });
  }

  // get the weather data by the current location cordinates
  getWeatherByCord(lat: any,lng: any){
    this.WeatherApiService.getWeatherByCords(lat,lng).subscribe(data=>{
      this.setWeatherData(data);
    })
  }

  // get current locations cordinates
  getCurrentLocation(){
    this.WeatherApiService.getCurrentLocation().then(resp=>{
      let lng = resp.lng.toFixed(0);
      let lat = resp.lat.toFixed(0);
      this.getWeatherByCord(lat,lng);
    });
  }

  // set weatherData to the object for showing in the template
  setWeatherData(data: any){
    this.weatherData = data;
      this.weatherData.temp_celsious = (this.weatherData.main.temp - 273.15).toFixed(0);
      this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
      this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
      this.weatherData.feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
      this.weatherData.name = this.weatherData.name;
      this.weatherData.humidity = this.weatherData.main.humidity;
  }

  getLocation(){
    this.WeatherApiService.getLocation().subscribe(data=>{
      this.locationData = data;  
    })
  }
}
