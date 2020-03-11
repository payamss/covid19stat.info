import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message = 'Loading....';
  public newcase: any;
  public death: any;
  public cured: any;

  constructor(private user: UserService) {}

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message;
    });
  }

  // tslint:disable-next-line: member-ordering
  Cities = [
    'آذربایجان شرقی',
    'آذربایجان غربی',
    'اردبیل',
    'اصفهان',
    'البرز',
    'ایلام',
    'بوشهر',
    'تهران',
    'چهارمحال و بختیاری',
    'خراسان جنوبی',
    'خراسان رضوی',
    'خراسان شمالی',
    'خوزستان',
    'زنجان',
    'سمنان',
    'سیستان و بلوچستان',
    'فارس',
    'قزوین',
    'قم',
    'کردستان',
    'کرمان',
    'کرمانشاه',
    'کهگیلویه و بویراحمد',
    'گلستان',
    'گیلان',
    'لرستان',
    'مازندران',
    'مرکزی',
    'هرمزگان',
    'همدان',
    'یزد'
  ];
  SelectedCity = 'انتخاب استان ها';

  SelectCity(event) {
    event.preventDefault();
    const target = event.target;
    //debugger

    this.SelectedCity = target.innerText;
    console.log(this.SelectedCity);
  }
  today = Date.now();

}
