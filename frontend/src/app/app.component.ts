import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit {
  route: string;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() === '') {
        $('.main-header').removeClass('dark-header');
      } else {
        $('.main-header').addClass('dark-header');
      }
    });
  }

  ngOnInit() { }

}
