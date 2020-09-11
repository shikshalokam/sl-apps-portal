import { environment } from 'src/environments/environment';
import { Component, OnInit, Output, EventEmitter, ApplicationRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  redirectLink: any;
  constructor() { }

  ngOnInit(): void {

    this.redirectLink = environment.portal_url;
  }


  goTo(id) {
    
  }

  toggleNav() {
    this.toggle.emit();
  }

}
