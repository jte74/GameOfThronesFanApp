import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IceandfireHttpserviceService } from 'src/Services/iceAndFireService';
import { Character } from 'src/Models/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
    public dataSource = new MatTableDataSource<Character>();
    constructor(private _service: IceandfireHttpserviceService) { }
  
    ngOnInit() {
      this._service?.getCharacters()
        .subscribe(
          data => {
            this.dataSource = new MatTableDataSource(data);
          }
        );
      console.log(this.dataSource);
    }
  }