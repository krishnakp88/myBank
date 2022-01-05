import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Welcome to Fed Point"
  target="Account number"
  acno=""
  pwd=""
 
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
    
  }

  pwdChange(event:any){
    this.pwd=event.target.value;
    console.log(this.pwd);
    
  }



  login(){
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pwd
    if(this.loginForm.valid){
      let result=this.ds.login(acno,pswd)
    
    if(result){
      alert("Login successful")
        this.router.navigateByUrl('home')
    }
    
    }else{
      alert("Invalid form")
    }

    
  }

  /////for template reference
  // login(a:any,p:any){
  //   var acno=a.value
  //   var pswd=p.value

  //   let database=this.users

  //   if(acno in database){
  //     if(pswd==database[acno]["pass"]){
  //       alert("Login successful")
  //     }
  //     else{
  //       alert("Incorrect password")
  //     }
  //   }
  //   else{
  //     alert("Invalid Accnumber")
  //   }
  // }
}
