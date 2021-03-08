import { Component, OnInit } from '@angular/core';
import { BookClickedService } from '../book-clicked.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public viewedBooks: BookClickedService ) { }

  ngOnInit(): void {
  }

}
