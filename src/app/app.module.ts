import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { HomeComponent } from './home/home.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CharactersComponent } from './characters/characters.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IceandfireHttpserviceService } from 'src/Services/iceAndFireService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    BooksComponent,
    HousesComponent,
    HomeComponent,
    LoginModalComponent,
    CharactersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'books', component: BooksComponent},
      {path: 'houses', component: HousesComponent},
      {path: 'characters', component: CharactersComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [RouterModule],
  providers: [IceandfireHttpserviceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
