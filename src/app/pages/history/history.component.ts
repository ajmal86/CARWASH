import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent extends UpgradableComponent {
  @HostBinding('class.mdl-grid') private readonly mdlGrid = true;
  @HostBinding('class.mdl-grid--no-spacing') private readonly mdlGridNoSpacing = true;
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


  ngOnInit() {
  }

}
