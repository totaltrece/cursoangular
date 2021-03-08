import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookClickedService {

  books: Array<any>; 
  authorSelected: String;

  constructor() { 
    this.books = [ ];
  }
  
  bookViewed( bookViewed){
    console.log("bookViewed: ", bookViewed )
    this.books.push(bookViewed)
  }


  viewList(){
    if(this.books.length > 0){
      return this.books;
    }else{
      return false;
    }
  }

  // loadList
  /*
  {id:1, title: 'libro 1', author : 'pepe'},
    {id:2,  title: 'libro 2', author : 'luis'},
    {id:3,  title: 'libro 3', author : 'manuel'},
    {id:4,  title: 'libro 4', author : 'juan'},
    {id:5,  title: 'libro 5', author : 'javier'},
    {id:6,  title: 'libro 6', author : 'keith'}*/

}
