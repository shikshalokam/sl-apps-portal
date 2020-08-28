import { Component, OnInit } from '@angular/core';
import { AppDetailsService } from 'src/app/services/app-details.service';

@Component({
  selector: 'app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.scss'],
})
export class AppLinksComponent implements OnInit {
  constructor(public appService: AppDetailsService) {}

  ngOnInit(): void {
    this.appService.getAppDetails();
  }
}
