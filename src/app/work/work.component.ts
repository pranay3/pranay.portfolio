import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
declare const ScrollOut: any;
@Component({
    selector: 'work-content',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})
export class WorkComponent implements AfterViewInit {

    constructor(private elementRef: ElementRef) { }
    workDiv: any;
    opacity = 0.7;
    kbTrans = "none";
    gearPos ="none";

    ngAfterViewInit(): void {
        this.workDiv=this.elementRef.nativeElement.querySelector('#workDiv');
        ScrollOut({
            threshold:.1
          }); 
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
        let opVal = window.scrollY > 500? window.scrollY*7/(500*(window.scrollY-500)):1;
        opVal = window.scrollY > 700 ? 0: opVal;
        this.opacity = opVal;
        let kbPos = (window.scrollY-500)/5;
        if(window.scrollY > 500){
            this.kbTrans = "translateX("+kbPos+"px)";
        }
        else {
            this.kbTrans = "none";
        }
        this.gearPos = "rotate("+window.scrollY/8+"deg)";
    }


}