import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';


import { ReportComponent } from './report.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  declarations: []
})
export class ReportModule { }
