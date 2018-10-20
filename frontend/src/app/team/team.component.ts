import { Component, OnInit } from '@angular/core';

declare const $: any;


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function cursorAnimation() {
      $('#cursor').animate({
          opacity: 0
      }, 'fast', 'swing').animate({
          opacity: 1
        }, 'fast', 'swing');
    }
    setInterval(cursorAnimation, 2000);
  }

}
