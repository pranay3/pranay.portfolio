import { Component, OnInit } from '@angular/core';

declare var Rellax : any;
declare const ScrollOut: any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var rellax = new Rellax('.rellax');
    ScrollOut({
      threshold: 0.5
    }); 
  }

}