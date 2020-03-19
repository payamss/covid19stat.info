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
@Component({
  selector: 'app-table-total-data',
  templateUrl: './table-total-data.component.html',
  styleUrls: ['./table-total-data.component.css']
})
export class TableTotalDataComponent implements OnInit {
  public myData: any;
  case: any;
  death: any;
  cured: any;
  displayedColumns: string[] = ['cured', 'death', 'case', 'provinces', 'date' ];
  dataSource: DataTableComponent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private Loader: LoadfromdbService) {
    this.dataSource = new DataTableComponent(this.Loader);

  }

  ngOnInit(): void {
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
  getTotalCase() {
    return this.case.map(t => t.case).reduce((acc, value) => acc + value, 0);
  }
  getTotalDeath() {
    return this.death.map(t => t.death).reduce((acc, value) => acc + value, 0);
  }
  getTotalCured() {

    return this.cured.map(t => t.cured).reduce((acc, value) => acc + value, 0);
  }
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
