import { Component, OnInit } from '@angular/core';

declare const $: any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.main-header').removeClass('dark-header');
  }

}
