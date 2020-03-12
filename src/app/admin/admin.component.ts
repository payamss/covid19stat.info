import { AddtodbService } from './../addtodb.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

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
  public today: any;
  constructor(private user: UserService, private add: AddtodbService, private router: Router) {}

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


SubmitData(event) {
  if (this.SelectedCity !== 'انتخاب استان ها' ) {
    if (this.death >= 0 && this.cured >= 0 && this.newcase >= 0){
    event.preventDefault();
    const target = event.target;
    //debugger
    const date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    // this.newcase = target.querySelector('#newcase').value;
    // this.death = target.querySelector('#death').value;
    // this.cured = target.querySelector('#cured').value;
    console.log(date, this.newcase, this.death, this.cured, this.SelectedCity);
    this.add.insertData(date, this.newcase, this.death, this.cured, this.SelectedCity.trim()).subscribe(data => {
      if (data.success) {
        window.alert(data.message);
        this.router.navigate(['admin']);

      } else {
        window.alert(data.message);
      }
    });
  } else{
    window.alert('لطفا عدد مثبت وارد نمایید');

  }
  } else {
  window.alert('لطفا یک استان را انتخاب کنید');
}
}

}
