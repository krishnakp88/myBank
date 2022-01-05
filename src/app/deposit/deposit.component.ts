import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
acno=""
pwd=""
amt=""

depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositForm.value.acno
    var pwd=this.depositForm.value.pwd
    var amt=this.depositForm.value.amt
    if(this.depositForm.valid){
      let result=this.ds.deposit(acno,pwd,amt)

    if(result){
      alert(amt+" credited. New balance is :"+ result)
    }
    }else[
      alert("Invalid form")
    ]
    
  }
}
