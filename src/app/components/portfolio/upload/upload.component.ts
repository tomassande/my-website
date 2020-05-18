import { Global } from './../../../services/global';
import { ProjectService } from '../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { UploadService } from '../../../services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [ProjectService,UploadService]
})
export class UploadComponent implements OnInit {
  
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

    constructor(

      private _projectService: ProjectService,
      private _uploadService: UploadService

    ) {

      this.title="Create Project";
      this.project = new Project('','','',2020,'','','');

    }

  ngOnInit(): void {
  }

  onSubmit(form){
    /*Guardar datos*/
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){
          
          this._uploadService.makeFileRequest(Global.url+'upload-img/'+response.project._id,[],this.filesToUpload,'image')
          .then((result:any) =>{
            this.status="success";
            console.log(result);
            form.reset();
          });
        }else{
          this.status="failed";
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}
