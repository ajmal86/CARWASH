import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent {
  @HostBinding('class.projects-table') private readonly projectsTable = true;

  private tableHeader: string[] = [
    'Service',
    'Car',
    'User',
    'Time',
    'Status',
  ];
  private data: object[] = [
    {
      service: 'Normal Wash',
      car: "BMW 520",
      email: 'Luke@skywalker.com',
      time: 'Jun 15',
      status: [
        {
          color: 'color--light-blue',
          name: 'Assigned',
        },
        {
          color: 'background-color--primary',
          name: 'Pending',
        },
        {
          color: 'color--orange',
          name: 'Completed',
        },
      ],
      isSelected: false,
    },
    {
      service: 'Normal Wash',
      car: "BMW 520",
      email: 'Luke@skywalker.com',
      time: 'Jun 15',
      status: [
        {
          color: 'color--light-blue',
          name: 'Assigned',
        },
        {
          color: 'background-color--primary',
          name: 'Pending',
        },
        {
          color: 'color--orange',
          name: 'Completed',
        },
      ],
      isSelected: false,
    },{
      service: 'Normal Wash',
      car: "BMW 520",
      email: 'Luke@skywalker.com',
      time: 'Jun 15',
      status: [
        {
          color: 'color--light-blue',
          name: 'Assigned',
        },
        {
          color: 'background-color--primary',
          name: 'Pending',
        },
        {
          color: 'color--orange',
          name: 'Completed',
        },
      ],
      isSelected: false,
    },{
      service: 'Normal Wash',
      car: "BMW 520",
      email: 'Luke@skywalker.com',
      time: 'Jun 15',
      status: [
        {
          color: 'color--light-blue',
          name: 'Assigned',
        },
        {
          color: 'background-color--primary',
          name: 'Pending',
        },
        {
          color: 'color--orange',
          name: 'Completed',
        },
      ],
      isSelected: false,
    },{
      service: 'Normal Wash',
      car: "BMW 520",
      email: 'Luke@skywalker.com',
      time: 'Jun 15',
      status: [
        {
          color: 'color--light-blue',
          name: 'Assigned',
        },
        {
          color: 'background-color--primary',
          name: 'Pending',
        },
        {
          color: 'color--orange',
          name: 'Completed',
        },
      ],
      isSelected: false,
    },
  ];
  private  index :Number;
  constructor() {
    setInterval(()=> { this.Add() }, 4 * 1000);
  }

public Add() {



    // let item={
    //   service: 'Normal Wash',
    //   car: "BMW 520",
    //   email: 'Luke@skywalker.com',
    //   time: 'Jun 15',
    //   status: [
    //     {
    //       color: 'color--light-blue',
    //       name: 'Assigned',
    //     },
    //     {
    //       color: 'background-color--primary',
    //       name: 'Pending',
    //     },
    //     {
    //       color: 'color--orange',
    //       name: 'Completed',
    //     },
    //   ],
    //   isSelected: false,
    // };
    // this.data.push(item);
  }

}


