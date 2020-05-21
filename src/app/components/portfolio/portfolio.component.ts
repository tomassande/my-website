import { Project } from './../../models/project';
import { Global } from './../../services/global';
import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService],
  styles: ['.footer { position: sticky; }']
})
export class PortfolioComponent implements OnInit {

  public projects: Project[];
  public url:string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.url=Global.url;
   }

  ngOnInit(): void {

    this.listProjects();

  }

  listProjects(){
    this._projectService.listProjects().subscribe(
      response=>{
        if(response.projects){
          this.projects=response.projects;
          console.log(this.projects);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }



}
