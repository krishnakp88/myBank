import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUserName:any

  users:any={
    1000:{acno:1000,fname:"Ram",password:"1000",balance:5000},
    1001:{acno:1001,fname:"Ravi",password:"1001",balance:5000},
    1002:{acno:1002,fname:"Rakhi",password:"1002",balance:5000}
  }

  constructor() { 
    this.getDetails()
  }
  saveDetails(){
    if(this.users){
      localStorage.setItem("db",JSON.stringify(this.users))
    }
    if(this.currentUserName){
      localStorage.setItem("cName",JSON.stringify(this.currentUserName))
    }
  }

  getDetails(){
    if(localStorage.getItem("db")){
      this.users=JSON.parse(localStorage.getItem("db") || '')
    }
    if(localStorage.getItem("cName")){
      this.currentUserName=JSON.parse(localStorage.getItem("cName") || '')
    }
  }

  register(acno:any,password:any,fname:any){

    let db=this.users

    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        fname,
        password,
        balance:0
      }
      this.saveDetails()
      return true
    }
  }

  login(acno:any,password:any){
    let database=this.users
    if(acno in database){
      if(password==database[acno]["password"]){
        this.currentUserName=database[acno]["fname"]
        this.saveDetails()
        return true
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("Invalid Accnumber")
      return false
    }
  }

  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.users

    if(acno in db){
      if(password == db[acno]["password"]){
        db[acno]["balance"]= db[acno]["balance"]+amount
        this.saveDetails()
        return db[acno]["balance"]
      }else{
        alert("incorrect password")
        return false
      }
    }else{
      alert("account doesn't exist")
      return false
    }
  }

  withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.users

    if(acno in db){
      if(password == db[acno]["password"]){
        if(db[acno]["balance"]>amount){
          db[acno]["balance"]= db[acno]["balance"]-amount
          this.saveDetails()
        return db[acno]["balance"]
        }
        else{
          alert("insufficient balance")
          return false
        }
        
      }else{
        alert("incorrect password")
        return false
      }
    }else{
      alert("account doesn't exist")
      return false
    }
  }
}

