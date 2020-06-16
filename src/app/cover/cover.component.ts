import { Component, OnInit } from '@angular/core';

declare const ScrollOut: any;
declare const makeItRain: any;
@Component({
  selector: 'cover-content',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ScrollOut({
      threshold: 0.5
    }); 
    makeItRain();
  }

}