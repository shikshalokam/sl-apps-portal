import { Component, OnInit } from '@angular/core';
import { AppDetailsService } from 'src/app/services/app-details.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.scss'],
})
export class AppLinksComponent implements OnInit {
  appName: any;
  appdetails: any;
  load : boolean = false;
  constructor(public appService: AppDetailsService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.appName = this.router.url.split('/')[1];
    this.appDetails(this.appName);
  }

  appDetails(name){
    this.appService.getAppDetails(name).subscribe(
      data =>{
        this.appdetails = data['result'];
        this.load = true;
      }, error =>{
      })
  }
}
