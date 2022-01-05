import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  acno=""
  pwd=""
  amt=""

  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  withdraw(){
    var acno=this.withdrawForm.value.acno
    var pwd=this.withdrawForm.value.pwd
    var amt=this.withdrawForm.value.amt
    if(this.withdrawForm.valid){
      let result=this.ds.withdraw(acno,pwd,amt)
    if(result){
      alert(amt+" debited. New balance is :"+ result)
    }
    }else{
      alert("invalid form")
    }
    
  }
}
