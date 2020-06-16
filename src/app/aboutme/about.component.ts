import { Component, OnInit } from '@angular/core';

declare const ScrollOut: any;
@Component({
  selector: 'about-content',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

    ngOnInit(): void {
      ScrollOut({
        once: true
      }); 
    }
}

