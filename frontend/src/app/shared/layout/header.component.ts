import { Component, OnInit } from '@angular/core';

declare const $: any;


@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.logo-text').html(function(i, html) {
      const chars = $.trim(html).split('');
      return '<span>' + chars.join('</span><span>') + '</span>';
    });
  }

}
