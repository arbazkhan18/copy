import { Component, OnInit } from '@angular/core';

import{ActivatedRoute,Router} from '@angular/router'
import { HttpServiceService } from '../http-service.service';


import {Location} from '@angular/common'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookData:any;
  private url:string;

  constructor(private http:HttpServiceService,private _route:ActivatedRoute,private router:Router,private location:Location){ }

  ngOnInit() {

    this.url=this._route.snapshot.paramMap.get("bookUrl");
    this.http.getSingleData(this.url).subscribe(
      data =>{
        this.bookData = data;
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