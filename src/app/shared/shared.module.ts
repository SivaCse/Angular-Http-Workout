import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { APIService } from './api.service';
import { MockData } from './mock-data';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';




@NgModule({
  imports: [
    InMemoryWebApiModule.forRoot(MockData),
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [ APIService ],
  declarations: []
})
export class SharedModule { }
