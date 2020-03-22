import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TotalProvincesService } from '../total-provinces.service';
export interface myData {
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
  errormessage: any;

  constructor(private Loader: TotalProvincesService) { }
   displayedColumns: string[] = ['cured', 'death', 'case', 'provinces'];
    mylistData: any = new MatTableDataSource([]);

   @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {

    this.Loader.LoadTotalData().subscribe(
      list => {
        this.mylistData.data = list;
     });
    this.mylistData.sort = this.sort;
    this.mylistData.paginator = this.paginator;
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.mylistData.filter = this.searchKey.trim().toLowerCase();
  }

}
