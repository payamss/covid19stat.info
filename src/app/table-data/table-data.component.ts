import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadfromdbService } from '../loadfromdb.service';
import { error } from '@angular/compiler/src/util';
export interface UserData {
  date: string;
  case: string;
  death: string;
  cured: string;
  provinces: string;
}
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  errormessage: any;

  constructor(private Loader: LoadfromdbService) { }
  public myData: any = [];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // listData = new MatTableDataSource<UserData>(this.myData);

   displayedColumns: string[] = ['cured', 'death', 'case', 'provinces', 'date' ];
    listData = new MatTableDataSource();

   @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {

    this.Loader.GetData().subscribe(
      list => {
        this.listData.data = list;
        // this.listData = new MatTableDataSource<UserData>(list);

    //     this.listData.filterPredicate = (data, filter) => {
    //       return this.displayedColumns.some(ele => {
    //         return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
    //       });
    //     };
     });
     this.listData.sort = this.sort;
     this.listData.paginator = this.paginator;
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
