import { LoadfromdbService } from './../loadfromdb.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


//   {
//     province: 'تهران',
//     newcase: '1',
//     death: '2',
//     cured: '3'
//   },  {
//     province: 'شیراز',
//     newcase: '1',
//     death: '2',
//     cured: '3'
//   },
// ];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public myData : any;


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
  }



  ngOnInit(): void {
   this.LoadData('');

  }
  title = 'choronasite';

  //countries = COUNTRIES;
  LoadData(s) {


      // event.preventDefault();
      // const target = event.target;
      //debugger
      // const date = formatDate(new Date(), 'yyyy/MM/dd', 'en');

      // console.log(date, this.newcase, this.death, this.cured, this.SelectedCity);
      this.Loader.LoadData(s).subscribe(data => {
       console.log(data);
       this.myData = data;
       //let COUNTRIES = JSON.parse(data);

        // if (data.success) {
        //   window.alert(data.message);
        //   this.router.navigate(['admin']);

        // } else {
        //   window.alert(data.message);
        // }
       return data;
      });
    }


}

