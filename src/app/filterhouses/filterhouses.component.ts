import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import{ActivatedRoute,Router}from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filterhouses',
  templateUrl: './filterhouses.component.html',
  styleUrls: ['./filterhouses.component.css']
})
export class FilterhousesComponent implements OnInit {
  houseData:any;
  houseName:string;
  constructor(private _http:HttpServiceService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {

   this._http.getHousesData().subscribe(
      data =>{
        this.houseData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

  getHouseData():any{
    this._http.getHouse(this.houseName).subscribe(
      data =>{
        console.log(data);
        (data[0] != undefined)?this.router.navigate(['/house',data[0].url]):this.toastr.error('No Data By This Name', 'Sorry!', {timeOut: 3000});;

    },
      error=>{console.log(error.Message)}
    )
  }
}