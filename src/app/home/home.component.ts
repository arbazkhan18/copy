import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   characterData=[];
   bookData =[];
   houseData=[];
  private characterUrl = 'https://www.anapioficeandfire.com/api/characters';

  constructor(private http:HttpServiceService) { }

  ngOnInit() {
    this.http.getBooksData().subscribe(
      data =>{
        this.bookData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
    this.http.getCharactersData(this.characterUrl).subscribe(
      data =>{
        this.characterData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
    this.http.getHousesData().subscribe(
      data =>{
        this.houseData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )

  }

}