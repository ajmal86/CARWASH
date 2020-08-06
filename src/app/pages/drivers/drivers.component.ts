import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent  {

  private tableHeader: string[] = [
    'Name',
    'Code',
    'Number',
    'Status',
  ];
  private data: object[] = [
    {
      name: 'James cameroon',
      code: "JC754543546",
      number: 'Luke@skywalker.com',
      status: [
        {
          color: 'color--green',
          name: 'Active',
        },
      ],
      isSelected: false,
    },
    {
      name: 'Will Smith',
      code: "JC754543546",
      number: '876766454356y576',
      status: [
        {
          color: 'color--red',
          name: 'Offline',
        },
      ],
      isSelected: false,
    },{
      name: 'James cameroon',
      code: "JC754543546",
      number: '65667654675',
      status: [
        {
          color: 'color--green',
          name: 'Active',
        },
      ],
      isSelected: false,
    },{
      name: 'Will Smith',
      code: "JC754543546",
      number: '876766454356y576',
      status: [
        {
          color: 'color--red',
          name: 'Offline',
        },
      ],
      isSelected: false,
    },
  ];

}
