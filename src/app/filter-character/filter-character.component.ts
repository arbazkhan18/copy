import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import{ActivatedRoute,Router}from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filter-character',
  templateUrl: './filter-character.component.html',
  styleUrls: ['./filter-character.component.css']
})
export class FilterCharacterComponent implements OnInit {

  characterData:any;
  private dataHere:any;
  characterName:string;
  private url='https://www.anapioficeandfire.com/api/characters';
  constructor(private _http:HttpServiceService,private router:Router,private toastr: ToastrService) {
  }

  ngOnInit() {

    this.dataHere = this._http.getCharactersData(this.url).subscribe(

      data =>{
        this.characterData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

  getCharacterData():any{
    this._http.getCharacter(this.characterName).subscribe(
      data =>{
        console.log(data);
        (data[0] != undefined)?this.router.navigate(['/character',data[0].url]):this.toastr.error('try searching WALDER', 'undefined!', {timeOut: 3000});;

    },
      error=>{console.log(error.Message)}
    )
  }

}