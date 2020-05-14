import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, query , style, animate, transition, group, animateChild } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  public show: boolean;

  constructor() {
    this.show = false;

  }

  ngOnInit(): void {
    
  }


  get stateName(){
    return this.show ? 'show' : 'hide'
  }

}
