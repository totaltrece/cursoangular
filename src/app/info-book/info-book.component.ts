import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {

 books: Array<any>; 
 bookSelected : any;
 bookId: Number;

  constructor( private userRoute: ActivatedRoute) {
    
    
    this.books = [ {id:1, title: 'libro 1', author : 'pepe'},
    {id:2,  title: 'libro 2', author : 'luis'},
    {id:3,  title: 'libro 3', author : 'manuel'},
    {id:4,  title: 'libro 4', author : 'juan'},
    {id:5,  title: 'libro 5', author : 'javier'},
    {id:6,  title: 'libro 6', author : 'keith'}];
  }

  ngOnInit(): void {
    this.userRoute.params.subscribe( //params: metodo asincorono que tiene un subscribe
        params => { // params, array asociativo
          console.log( params );
           this.bookId = params['bookId']
           this.bookSelected = this.bookSearch()
        }
    );
  }

  filterId(book){
    return book.id = this;
  }
  bookSearch(){
    return this.books.filter( this.filterId, this.bookId ) [0];
  }

}
