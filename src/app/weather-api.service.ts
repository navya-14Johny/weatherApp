import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
apiEndPoint = 'https://api.openweathermap.org/data/2.5/weather';
apiCountryEndpoint = 'https://corona.lmao.ninja/v2/countries';
apiKey = '1341d85997354bd9e7823a0210d5cefb';
  constructor(private http:HttpClient) { }

  getWeatherData(data: string | number){
    let params = new HttpParams()
    .set('q',data)
    .set('APPID',this.apiKey)
    console.log(params);
    return this.http.get(this.apiEndPoint, {params});
  }
  getCurrentLocation():Promise<any>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(response=>{
        resolve({lng:response.coords.longitude,lat:response.coords.latitude})
      })    
    })
  }
  getWeatherByCords(lat:any,lng:any){
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lng)
    .set('appid',this.apiKey)
    return this.http.get(this.apiEndPoint,{params});
  }
  
  getLocation(){
    return this.http.get(this.apiCountryEndpoint);
  }
}
