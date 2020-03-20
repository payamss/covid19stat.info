import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
  success: boolean,
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class AddtodbService {

  constructor(private http: HttpClient) { }
  insertData(date, newcase, death, cured, provinces) {
    //debugger
    // post these details to API server return user info if correct
    return this.http.post<myData>('http://192.168.1.178:8080/api/index.php?q=add', {
      date,
      newcase,
      death,
      cured,
      provinces
    });
}
}
