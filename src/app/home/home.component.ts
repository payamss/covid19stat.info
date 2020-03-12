import { Component, OnInit } from '@angular/core';
interface Country {
  province: string;
  death: string;
  cured: string;
  newcase: string;
}
const COUNTRIES: Country[] = [
  {
    province: 'تهران',
    newcase: '1',
    death: '2',
    cured: '3'
  },  {
    province: 'شیراز',
    newcase: '1',
    death: '2',
    cured: '3'
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {



  constructor() { }

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
    console.log(this.SelectedCity);
  }



  ngOnInit(): void {
  }
  title = 'choronasite';

  countries = COUNTRIES;

}

