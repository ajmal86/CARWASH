import { Injectable } from '@angular/core';

@Injectable()
export class CountryStatisticsChartService {
  public getCountryStatistics() {
    return [
      {
        key: 'Booking',
        y: 31,
      },
      {
        key: 'Completed',
        y: 26,
      },
      {
        key: 'Pending',
        y: 18,
      },
      {
        key: 'Canceled',
        y: 15,
      },

    ];
  }
}
