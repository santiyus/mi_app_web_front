import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  constructor(private _http: HttpClient) { }

  //Recibir cualquier objeto 
  get_http(pUrl:string): Observable<any> {
    return this._http.get(pUrl)
  }
}
