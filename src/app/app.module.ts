import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/Icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';


//NG8001: 'mat-form-field' is not a known element:

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { Routes } from '@angular/router';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationComponent } from './pagination/pagination.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

const routes: Routes = [
  {
      path: 'table',
      component: TableComponent,
  },
];



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginationComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    PaginationModule.forRoot(),
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
