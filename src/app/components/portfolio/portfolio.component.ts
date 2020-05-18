import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
