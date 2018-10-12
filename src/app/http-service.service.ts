import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http'

import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  getCharactersData(url):any{
    return this.http.get(url);
  }

  getBooksData():any{
    return this.http.get('https://www.anapioficeandfire.com/api/books');
  }

  getHousesData():any{
    return this.http.get('https://www.anapioficeandfire.com/api/houses');
  }

  getSingleData(url):any{
    return this.http.get(url)
  }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getCharacter(name):any{
    console.log("in service")
    return this.http.get('https://www.anapioficeandfire.com/api/characters?name='+name)
  }
  getBook(name):any{
    console.log("in service")
    return this.http.get('https://www.anapioficeandfire.com/api/books?name='+name)
  }
  getHouse(name):any{
    console.log("in service")
    return this.http.get('https://www.anapioficeandfire.com/api/houses?name='+name)
  }
}