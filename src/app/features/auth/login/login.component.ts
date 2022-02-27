import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isError:boolean=false;
  loginSubmitted=false;
  submitted=false;
  msgError: any;
  loginForm!: FormGroup;
  constructor(private router: Router,private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  
  loginUser(){
    this.loginSubmitted=true;    
    if (this.loginForm.invalid) {
      return this.loginForm.controls;
    } 
    else {
      if((this.loginForm.value.email === 'fingent') && (this.loginForm.value.password === 'fingent')){
        this.router.navigate(['/auth/dashboard']);
        return true;
      }
      else{
        this.isError=true;
        this.msgError = "incorrect username or password";     
        this.loginForm.reset();   
        return false;
      }
      
    }
  }
  get l() { return this.loginForm.controls; }
}


