import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


import { BookClickedService } from '../book-clicked.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


books: any; 
authorSelected: String;
errorHttp: Boolean;
loading: Boolean;

  constructor( private http : HttpClient, public BookClicked : BookClickedService) { 
   
  }

  
  ngOnInit(): void {
    this.loading = true;
    this.loadList();
  }


  loadList(){
    this.http.get('http://localhost:3000/books').subscribe(
      ( response: Response) => {
        this.loading = false;
        this.books = response;
      }, ( response: Response) => {
        this.errorHttp  = true;
      }

    )
  }


  addBook(_bookViewed){
    this.BookClicked.bookViewed( _bookViewed );
  }


  
}
