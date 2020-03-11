
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

// tslint:disable-next-line: class-name
interface logoutStatus {
  success: boolean;
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('http://localhost:8080/api/database.php');
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost:8080/api/isloggedin.php');
  }

  logout() {
    return this.http.get<logoutStatus>('http://localhost:8080/api/logout.php');
  }

}
