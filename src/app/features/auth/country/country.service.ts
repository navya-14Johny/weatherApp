import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl:string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'https://corona.lmao.ninja/v2/countries';
   }

  getCountryDetails(){
    return this.httpClient.get(this.apiUrl);
  }
  
}
