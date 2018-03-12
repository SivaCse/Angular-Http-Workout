import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';


import { UserService } from './user/user.service';
import { ReportService } from './report/report.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ReportModule
  ],
  providers: [UserService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
