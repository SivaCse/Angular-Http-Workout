import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AUTH_TOKEN } from '../config';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': AUTH_TOKEN
  })
};

@Injectable()
export class APIService {

  constructor(
    private http: HttpClient) {
  }

  getData(url:string,headers?:{}): Observable<any> {
    return this.http.get<any>(url,this.combineHeaders(headers));
  }

  addData (url:string, data: any,headers?:{}): Observable<any> {
    return this.http.post<any>(url, data, this.combineHeaders(headers));
  }

  deleteData (url:string, id: number,headers?:{}): Observable<{}> {
    const apiUrl = `${url}/${id}`;
    return this.http.delete(apiUrl,this.combineHeaders(headers));
  }

  updateData (url:string, data: any,headers?:{}): Observable<any> {
    return this.http.put<any>(url, data, this.combineHeaders(headers));
  }

  combineHeaders(headers) {
    return {...httpOptions,headers};
  }

}

