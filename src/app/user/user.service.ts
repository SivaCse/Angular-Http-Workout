import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { APIService } from '../shared/api.service';
import { IUser } from './user.interface';

import { API_URLS } from '../constants';

@Injectable()
export class UserService {
  constructor(private _api:APIService) { }

  getUsers(): Observable<IUser[]> {
    const URL = `${API_URLS.USER}`;
    return this._api.getData(URL,{});
  }

  saveUser(data: IUser): Observable<IUser> {
    return this._api.addData(API_URLS.USER,data);
  }

  updateUser(data: IUser): Observable<IUser> {
    return this._api.updateData(API_URLS.USER,data);
  }

  deleteUser(id:number): Observable<any> {
    return this._api.deleteData(API_URLS.USER,id);
  }
}