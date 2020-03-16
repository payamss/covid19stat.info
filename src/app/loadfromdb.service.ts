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
  LoadData() {
    //debugger
    // post these details to API server return user info if correct
    return this.http.post<myData>('http://localhost:8080/api/index.php?q=loaddata', {

    });
}
}
