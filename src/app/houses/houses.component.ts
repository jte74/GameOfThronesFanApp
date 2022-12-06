import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { House } from 'src/Models/House';
import { IceandfireHttpserviceService } from 'src/Services/iceAndFireService';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit {
  newSubscription: Subscription = new Subscription;
  constructor(public _service: IceandfireHttpserviceService, public _route: Router) { }

  displayedColumns: string[] = ['name', 'region', 'words'];

  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: House) => `${element.name}`,
    },
    {
      columnDef: 'words',
      header: 'Words',
      cell: (element: House) => `${element.words}`,
    },
    {
      columnDef: 'region',
      header: 'Region',
      cell: (element: House) => `${element.region}`,
    }
  ];

  dataSource = new MatTableDataSource<House>();
  ngOnInit() {
    this.newSubscription = this._service?.Gethouse().subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          console.log(this.dataSource);
        });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
  }
  
  //TODO: change characters to house with a details single page 
  clickedRows(houseClicked: House) {
    this._route.navigate(['/characters']);
  }

  ngOnDestroy() {
      this.newSubscription.unsubscribe();
  }

}
