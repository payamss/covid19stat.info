import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoadfromdbService } from '../loadfromdb.service';
import { DataSource } from '@angular/cdk/collections';

export interface UserData {
  date: string;
  case: string;
  death: string;
  cured: string;
  provinces: string;
}


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  public myData: any;

  displayedColumns: string[] = ['cured', 'death', 'case', 'provinces', 'date' ];
  dataSource: DataTableComponent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private Loader: LoadfromdbService) {
    // Create 100 users
    // const users = Array.from(this.myData);

    // Assign the data to the data source for the table to render
    this.dataSource = new DataTableComponent(this.Loader);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // LoadData(s) {
  //   this.Loader.LoadData(s).subscribe(data => {
  //     console.log(data);
  //     this.myData = data;
  //     return {
  //       date: data.date,
  //       case: data.case,
  //       death: data.death,
  //       cured: data.cured,
  //       provinces: data.provinces
  //     };
  //   });
  // }
}
export class DataTableComponent extends DataSource<any> {
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;
  constructor(private Loader: LoadfromdbService) {
    super();
  }
  connect(): Observable<UserData[]> {
    return this.Loader.GetData();
  }
  disconnect() {}
}
