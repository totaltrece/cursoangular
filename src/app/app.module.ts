import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { RandomComponent } from './random/random.component';
import { ColoursComponent } from './colours/colours.component';
import { FirmComponent } from './firm/firm.component';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { InfoBookComponent } from './info-book/info-book.component';

import { BookClickedService } from './book-clicked.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RendererComponent } from './renderer/renderer.component';



const routes: Routes = [
  
  { path : 'information/:bookId', component: InfoBookComponent },
  { path : 'information', redirectTo: '/' },
  { path : '', component: CoverComponent, pathMatch: 'full' },
  { path : 'books', component: BooksComponent },
  { path : 'about', component: AboutComponent },
  { path : '**', redirectTo: '/'}

];

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    RandomComponent,
    ColoursComponent,
    FirmComponent,
    BooksComponent,
    AboutComponent,
    HeaderComponent,
    CoverComponent,
    InfoBookComponent,
    RendererComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule  ],
  providers: [ BookClickedService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
