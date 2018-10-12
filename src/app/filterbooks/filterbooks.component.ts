import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-filterbooks',
  templateUrl: './filterbooks.component.html',
  styleUrls: ['./filterbooks.component.css']
})
export class FilterbooksComponent implements OnInit {
  private dataHere:any;
  bookName:string;
  bookData:any;
  constructor(private _http:HttpServiceService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {

    this.dataHere = this._http.getBooksData().subscribe(
      data =>{
        this.bookData = data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }
  
  getBookData():any{
    this._http.getBook(this.bookName).subscribe(
      data =>{
        console.log(data);
        (data[0] != undefined)?this.router.navigate(['/book',data[0].url]):this.toastr.error('No Data By This Name', 'Sorry!', {timeOut: 3000});;

    },
      error=>{console.log(error.Message)}
    )
  }
}