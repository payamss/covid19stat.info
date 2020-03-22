import { Component, OnInit } from '@angular/core';
import { LoadtotalService } from '../loadtotal.service';

@Component({
  selector: 'app-total-data',
  templateUrl: './total-data.component.html',
  styleUrls: ['./total-data.component.css']
})
export class TotalDataComponent implements OnInit {

  constructor(private Loader: LoadtotalService) { }
  public myData: any;

  // tslint:disable-next-line: variable-name
  public data_from_server = false;
  ngOnInit(): void {
    this.LoadData();
    this.data_from_server = true;
  }
  LoadData() {
  this.Loader.LoadTotalData().subscribe(data => {
    //console.log(data);
    this.myData = data;
    return data;
   });
 }
}
