import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppDetailsService {
  constructor(public http: HttpClient) {}

  getAppDetails(appName) {
    return this.http
      .get('http://dev.api.shikshalokam.org/kendra/api/v1/apps/details/samiksha'
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
