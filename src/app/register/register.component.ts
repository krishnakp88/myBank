import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname=""
  acno=""
  pwd=""

  registerForm=this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
register(){
  if(this.registerForm.valid){
    var fname= this.registerForm.value.fname
  var acno=this.registerForm.value.acno
  var pwd=this.registerForm.value.pwd

  let result=this.ds.register(acno,pwd,fname)
console.log(result);

  if(result){
    alert("account registered succesfully")
    this.router.navigateByUrl('')
  }
  else{
    alert("account already exist!!!!!!")
  }
  }
  else{
    alert("invalid form")
  }
  
}
}

