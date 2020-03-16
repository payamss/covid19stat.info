import { LoadfromdbService } from './../loadfromdb.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public myData: any;
  public mycities: any;


  constructor(private Loader: LoadfromdbService) { }
  toppings = new FormControl();
  Cities = ['آذربایجان شرقی','آذربایجان غربی','اردبیل', 'اصفهان', 'البرز', 'ایلام', 'بوشهر', 'تهران',
  'چهارمحال و بختیاری', 'خراسان جنوبی', 'خراسان رضوی', 'خراسان شمالی', 'خوزستان', 'زنجان', 'سمنان',
  'سیستان و بلوچستان', 'فارس', 'قزوین', 'قم', 'کردستان', 'کرمان', 'کرمانشاه', 'کهگیلویه و بویراحمد',
  'گلستان', 'گیلان', 'لرستان', 'مازندران', 'مرکزی', 'هرمزگان', 'همدان', 'یزد'
   ];

    SelectedCity = 'انتخاب استان ها';

   SelectCity(event) {
    event.preventDefault();
    const target = event.target;
    //debugger

    this.SelectedCity = target.innerText;
    this.LoadData(this.SelectedCity);
    console.log(this.SelectedCity);
//     this.mycities = this.mycities + ',' + this.SelectedCity;
// console.log(this.mycities)
  }



  ngOnInit(): void {
   this.LoadData('');

  }
  LoadData(s) {
      this.Loader.LoadData(s).subscribe(data => {
       console.log(data);
       this.myData = data;
       return data;
      });
    }


}

