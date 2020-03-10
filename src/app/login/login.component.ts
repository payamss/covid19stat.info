import { Router } from '@angular/router';
import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService,private router: Router) {}

  ngOnInit(): void {}
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        console.log(username, password);
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    });
  }
}
