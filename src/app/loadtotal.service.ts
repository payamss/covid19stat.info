import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
  case: string;
  death: string;
  cured: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoadtotalService {

  constructor(private http: HttpClient) { }
  LoadTotalData() {
    //debugger
    // post these details to API server return user info if correct
    return this.http.post<myData>('http://localhost:8080/api/index.php?q=total', {

    });
}
}