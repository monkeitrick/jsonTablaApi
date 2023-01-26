import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatabaseTablaComponent } from './database-tabla/database-tabla.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';  
import { MatPaginatorModule } from '@angular/material/paginator';
  
@NgModule({
  declarations: [
    AppComponent,
    DatabaseTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
