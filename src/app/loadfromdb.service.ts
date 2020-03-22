import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
  date: string;
  case: string;
  death: string;
  cured: string;
  provinces: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoadfromdbService {

  constructor(private http: HttpClient) { }
  LoadData(s) {
    //debugger
    // post these details to API server return user info if correct
    return this.http.post<myData>('http://covid19stat.info/index.php?q=loaddata&s=' + s, {

    });
}
GetData(): Observable<myData[]> {
  return this.http.post<myData[]>('http://covid19stat.info/index.php?q=loaddata', {});
}

}
