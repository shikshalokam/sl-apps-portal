import { Component, OnInit } from '@angular/core';
import { AppDetailsService } from 'src/app/services/app-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.scss'],
})
export class AppLinksComponent implements OnInit {
  appName: any;
  constructor(public appService: AppDetailsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(event => {
      this.appName = event.appName;
      // this.appService.getAppDetails('appName');
     });
     this.appService.getAppDetails('appName');
  }
}
