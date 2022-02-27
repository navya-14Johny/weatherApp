import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalCase!:any;
  totalDeaths!: '';
  totalRecovered!: '';
  todayCase!: '';
  todayDeaths!: '';
  todayRecovered!: '';
  temp!: any;
  constructor(private dashboardService: DashboardService,private router: Router,private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails(){
    this.dashboardService.getDetails().subscribe(data => {
      this.temp = data;
      this.totalCase = this.temp['cases'];
      this.totalDeaths = this.temp['deaths'];
      this.totalRecovered = this.temp['recovered'];
      this.todayCase = this.temp['todayCases'];      
      this.todayDeaths = this.temp['todayDeaths'];      
      this.todayRecovered = this.temp['todayRecovered'];
    });
  }
}
