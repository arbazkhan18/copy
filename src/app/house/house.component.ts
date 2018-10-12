import { Component, OnInit } from '@angular/core';


import{ActivatedRoute,Router} from '@angular/router'
import { HttpServiceService } from '../http-service.service';

import {Location} from '@angular/common'



@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

   houseData:any;
  private url:string;

  constructor(private http:HttpServiceService,private _route:ActivatedRoute,private router:Router,private location:Location) { }

  ngOnInit() {

    this.url=this._route.snapshot.paramMap.get("houseUrl");
    this.http.getSingleData(this.url).subscribe(
      data =>{
        this.houseData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }
  goBack():any{
    this.location.back();
  }
}