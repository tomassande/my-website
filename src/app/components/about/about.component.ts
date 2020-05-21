import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, query , style, animate, transition, group, animateChild } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Files } from './../../models/files';
import { Global } from './../../services/global';
import { FilesService } from './../../services/files.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [FilesService]
})

export class AboutComponent implements OnInit {
  public show: boolean;
  public file: File;

  constructor(

    private _filesService: FilesService

  ) {
    this.show = false;
  }

  ngOnInit(): void {
    
  }


  get stateName(){
    return this.show ? 'show' : 'hide'
  }


}