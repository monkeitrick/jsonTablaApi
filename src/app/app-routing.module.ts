import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseTablaComponent } from './database-tabla/database-tabla.component';

const routes: Routes = [{
  path:'databaseTable',
  component:DatabaseTablaComponent
}];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
