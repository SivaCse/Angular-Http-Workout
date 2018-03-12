import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { APIService } from '../shared/api.service';
import { IReport } from './report.interface';
import { API_URLS } from '../constants';

@Injectable()
export class ReportService {
  constructor(private _api:APIService) { }

  getReports = ():Observable<any>=> {
    return this._api.getData(API_URLS.REPORT);
  }

  saveReports = (data):Observable<any>=> {
    return this._api.addData(API_URLS.REPORT,data);
  }

  updateReports = (data,headers?):Observable<any>=> {
    return this._api.updateData(API_URLS.REPORT,data);
  }
}