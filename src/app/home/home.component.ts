import { LoadfromdbService } from './../loadfromdb.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Country {
  province: string;
  death: string;
  cured: string;
  newcase: string;
  data:[];
}

interface Food {
  value: string;
  viewValue: string;
}
let COUNTRIES: Country[] = [
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
    console.log(this.SelectedCity);
  }



  ngOnInit(): void {
this.LoadData();

  }
  title = 'choronasite';
  dataTable: any;
  dtOptions: any;
  tableData = [];
  countries = COUNTRIES;
  LoadData() {


      // event.preventDefault();
      // const target = event.target;
      //debugger
      // const date = formatDate(new Date(), 'yyyy/MM/dd', 'en');

      // console.log(date, this.newcase, this.death, this.cured, this.SelectedCity);
      this.Loader.LoadData().subscribe(data => {
       console.log(data);
       //let COUNTRIES = JSON.parse(data);
       this.tableData = data.data;
       this.dtOptions = {
         data: this.tableData,
         columns: [
           {title: 'ID', data: 'id'},
           {title: 'Email', data: 'email'},
           {title: 'First Name', data: 'first_name'},
           {title: 'Last Name', data: 'last_name'},
           {title: 'Avatar', data: 'avatar'},
         ]
       };
     }, err => {}, () => {
       this.dataTable = $(this.table.nativeElement);
       this.dataTable.DataTable(this.dtOptions);
     });
        // if (data.success) {
        //   window.alert(data.message);
        //   this.router.navigate(['admin']);

        // } else {
        //   window.alert(data.message);
        // }
      });
    }


}

