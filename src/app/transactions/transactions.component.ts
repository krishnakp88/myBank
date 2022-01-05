import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions:any
  constructor(private ds:DataService) { 
    this.transactions=this.ds.getTransaction()
  }

  ngOnInit(): void {
  }

}
