import { Component, OnInit } from '@angular/core';

import{ActivatedRoute,Router} from '@angular/router'
import { HttpServiceService } from '../http-service.service';

import {Location} from '@angular/common'


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characterData:any;
  private url:string;

  constructor(private http:HttpServiceService,private _route:ActivatedRoute,private router:Router,private location:Location) { }

    ngOnInit() {

    this.url=this._route.snapshot.paramMap.get("characterUrl");
    this.http.getSingleData(this.url).subscribe(
      data =>{
        this.characterData = data;
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