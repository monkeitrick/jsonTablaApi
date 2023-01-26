import {AfterViewInit, Component, Inject, Injectable, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { infoAPI } from 'src/app/models/infoAPI.model';
import { DataService } from '../services/dataTableService/data.service';

const DATA: infoAPI[] = [
  {  
    API:'string',
    Description:'string',
    Link:'string',
    Category:'string',
    Cors:'string',
  }
];


@Component({
  selector: 'app-database-tabla',
  templateUrl: './database-tabla.component.html',
  styleUrls: []
})

export class DatabaseTablaComponent {
  displayedColumns: string[] = ['API', 'Descripcion', 'Link', 'Category', 'Cors'];
  dataSource = new MatTableDataSource<infoAPI>([]);
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  ngAfterViewInit(){
    this.dataSource.paginator! = this.paginator;
  }
  constructor(private _entradasServicio:DataService){}
  listar(){
    this._entradasServicio.getEntradas().subscribe(
      response =>{
        console.log(response);
        if(response.count>0){
          this.dataSource.data=response.entries;
        }
      })
    // this.dataSource.data=[
    //   {
    //     API:'string',
    //     Description:'string',
    //     Link:'string',
    //     Category:'string',
    //     Cors:'string'
    //   },
    // ];
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// @Injectable()
// export abstract class TablePaginationExample implements AfterViewInit{
 
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource =  new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//   @ViewChild(MatPaginator) paginator! : MatPaginator;
//   ngAfterViewInit(): void {
//     this.dataSource.paginator=this.paginator;
//   }
// }

