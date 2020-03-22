import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: class-name
export interface myCaseData {
  case: string;
  provinces: string;
}
export interface myData {
  case: string;
  cured: string;
  death: string;
  provinces: string;
}
// tslint:disable-next-line: class-name
export interface myCuredData {
  cured: string;
  provinces: string;
}
// tslint:disable-next-line: class-name
export interface myDeathData {
  death: string;
  provinces: string;
}
@Injectable({
  providedIn: 'root'
})
export class TotalProvincesService {
  constructor(private http: HttpClient) {}
  LoadTotalData(): Observable<myData> {
    return this.http.post<myData>(
      'http://covid19stat.info/index.php?q=totalProvinces',
      {}
    );
  }
  LoadTotalCaseData(): Observable<myCaseData> {
    return this.http.post<myCaseData>(
      'http://covid19stat.info/index.php?q=totalProvinces&s=case',
      {}
    );
  }
  LoadTotalDeathData(): Observable<myDeathData> {
    return this.http.post<myDeathData>(
      'http://covid19stat.info/index.php?q=totalProvinces&s=death',
      {}
    );
  }
  LoadTotalCuredData(): Observable<myCuredData> {
    return this.http.post<myCuredData>(
      'http://covid19stat.info/index.php?q=totalProvinces&s=cured',
      {}
    );
  }
}
