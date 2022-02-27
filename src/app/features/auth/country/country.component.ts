import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  totalCase!:any;
  totalDeaths!: '';
  totalRecovered!: '';
  todayCase!: '';
  todayDeaths!: '';
  todayRecovered!: '';
  temp!: any;
  constructor(private dashboardService: CountryService) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(){
    this.dashboardService.getCountryDetails().subscribe(data => {
      this.temp = data;
      // this.totalCase = this.temp['cases'];
      // this.totalDeaths = this.temp['deaths'];
      // this.totalRecovered = this.temp['recovered'];
      // this.todayCase = this.temp['todayCases'];      
      // this.todayDeaths = this.temp['todayDeaths'];      
      // this.todayRecovered = this.temp['todayRecovered'];
    });
  }
}
