import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/Models/Book';
import { House } from 'src/Models/House';
import { Character } from 'src/Models/Character';

@Injectable()
export class IceandfireHttpserviceService {

    constructor(public http: HttpClient) {
   }

  mainUrl = "https://www.anapioficeandfire.com/api";

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.mainUrl+'/books');
    }

  public Gethouse(): Observable<House[]> {
    return this.http.get<House[]>(this.mainUrl+'/houses');
    }

  public getCharacters(): Observable<Character[]> {
      return this.http.get<Character[]>(this.mainUrl+'/characters');
    }
  }