import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-navdrawer',
  templateUrl: './navdrawer.component.html',
  styleUrls: ['./navdrawer.component.scss']
})
export class NavdrawerComponent implements OnInit {

  constructor(        private router: Router,
    private authenticationService: AuthenticationService) { }


  ngOnInit() {
  }

}
