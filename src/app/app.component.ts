import { slider } from './route-animations';
import { Component, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';



declare var jQuery:any;
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider]
})

export class AppComponent {
  title = 'my-website';
  public value: boolean;

  /*@ViewChild(AboutComponent) child;*/

  constructor(){
    
  }

  getPage(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData['animation']);
    return outlet.activatedRouteData['animation'];
  }

/*
  prepareRoute(outlet: RouterModule) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
/*
  
/*
  this.value=this.child.show;*/
  
  /*
  ngAfterViewInit(){
    this.value=this.child.encender();
  }
  


  toggle(){
    this.value=!this.value;
    this.child.show=this.value;
    console.log("Value tiene el valor "+this.value);
    console.log("Show tiene el valor "+this.child.show); 
  }

  moveLeft(){
    $('.profile').animate({right: '450px'},'slow');
  }
*/
}
