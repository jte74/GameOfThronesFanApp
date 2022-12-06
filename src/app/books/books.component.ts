import { Component, OnInit } from '@angular/core';
import { Book } from 'src/Models/Book';
import { MatTableDataSource } from '@angular/material/table';
import { IceandfireHttpserviceService } from 'src/Services/iceAndFireService';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public dataSource = new MatTableDataSource<Book>();
  constructor(private _service: IceandfireHttpserviceService) { }

  ngOnInit() {
    this._service?.getBooks()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
        }
      );
    console.log(this.dataSource);
  }
}