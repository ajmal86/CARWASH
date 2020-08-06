import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {
  particular: string = '';
  amount : number;
  total : number=4500;
  private tableHeader: string[] = [
    'Particular',
    'Date',
    'Amount',
  ];
  private data: object[] = [
    {
      particular: 'Purchase raw materials',
      date: "17/07/2020",
      amount: '-2500',
    },
    {
      particular: 'Purchase soap',
      date: "17/07/2020",
      amount: '-200',
    },{
      particular: 'Sales interest',
      date: "17/07/2020",
      amount: '2500',
    },
  ];
  constructor() { }

  ngOnInit() {
  }
 addData(){
this.data.push(
  {particular: this.particular,
date: "17/07/2020",
amount: this.amount,}
);
this.total+=this.amount;
this.particular='';
this.amount=0;
 }
}
