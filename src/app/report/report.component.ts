import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';
import { IReport } from './report.interface';

@Component({
  selector: 'report',
  templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit {
    reports: IReport[];
    res:any;
    constructor(private _reportService:ReportService) {}

    ngOnInit() {
        this.getReports();
    }

    getReports() : void {
        this._reportService
        .getReports()
        .subscribe((data)=>this.reports=data);
    }

    saveReports = ():void=>{
       let data = {
        'id': null,
        'reportName': 'Report 5 ',
        'description': 'Report 5  Description'
    };
       this._reportService
       .saveReports(data)
       .subscribe((data)=> this.reports.push(data));
    }

    updateReports = ():void=> {
        let reqData = {
            'id': 4,
            'reportName': 'Report 5 ',
            'description': 'Report 5  Description'
        };
        this._reportService
        .updateReports(reqData)
        .subscribe((data)=>{
            this.reports[reqData.id-1] = reqData;
        })
    }
}
