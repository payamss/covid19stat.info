import { TotalProvincesService } from './../total-provinces.service';
import { LoadfromdbService } from './../loadfromdb.service';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as echarts from 'echarts/lib/echarts';

import { EChartOption } from 'echarts';
import { gexf } from 'echarts/extension/dataTool';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public myData: any = [];
  public myPData: any = [];

  // tslint:disable-next-line: variable-name
  public data_from_server = false;
  options = {
    title: {
      text: 'loading',
      subtext: 'loading Data',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: this.myData.provinces
    },
    calculable: true,
    series: [
      {
        // name: 'Counters',
        // type: 'pie',
        // radius: '55%',
        // center: ['50%', '50%'],
        name: 'area',
        type: 'pie',
        radius: [30, 80],
        roseType: 'area',
        data: this.myData
      }
    ]
  };
  mergeOption: any;
  loading = false;
  optionsCase = this.options;
  optionsDeath = this.options;
  optionsCured = this.options;

  graphOption: Observable<EChartOption>;
  constructor(private Loader: TotalProvincesService) {}

  ngOnInit(): void {
    this.LoadCaseData();
    this.LoadDeathData();
    this.LoadCuredData();
    this.data_from_server = true;
  }

  LoadCaseData() {
    this.Loader.LoadTotalCaseData().subscribe(resdata => {
      this.optionsCase = {
        title: {
          text: 'کل مبتلایان',
          subtext: ' ',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: resdata.provinces
        },
        calculable: true,
        series: [
          {
            // name: 'Counters',
            // type: 'pie',
            // radius: '55%',
            // center: ['50%', '50%'],
            name: 'area',
            type: 'pie',
            radius: [30, 80],
            roseType: 'area',
            data: resdata
          }
        ]
      };

      return resdata;
    });
  }
  LoadDeathData() {
    this.Loader.LoadTotalDeathData().subscribe(resdata => {
      this.optionsDeath = {
        title: {
          text: 'کل فوت شدگان',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: resdata.provinces
        },
        calculable: true,
        series: [
          {
            // name: 'Counters',
            // type: 'pie',
            // radius: '55%',
            // center: ['50%', '50%'],

            name: 'area',
            type: 'pie',
            radius: [30, 80],
            roseType: 'area',
            data: resdata
          }
        ]
      };

      return resdata;
    });
  }
  LoadCuredData() {
    this.Loader.LoadTotalCuredData().subscribe(resdata => {
      this.optionsCured = {
        title: {
          text: ' کل بهبودیافتگان',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: resdata.provinces
        },
        calculable: true,
        series: [
          {
            // name: 'Counters',
            // type: 'pie',
            // radius: '55%',
            // center: ['50%', '50%'],
            name: 'area',
            type: 'pie',
            radius: [30, 80],
            roseType: 'area',
            data: resdata
          }
        ]
      };

      return resdata;
    });
  }

}
