import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Files} from '../models/files';
import {Global} from './global';

@Injectable()
export class FilesService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url;
    }

    saveFile(file: File): Observable<any>{
        let params=JSON.stringify(file);
        let headers=new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'save-file',params,{headers: headers});
    }


    getFile():Observable<any>{
    let headers=new HttpHeaders().set("Content-Type","application/json");

    return this._http.get(this.url+'get-file',{headers: headers});
    }


}