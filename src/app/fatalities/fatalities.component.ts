import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FatalitiesData } from '../models/fatalities-data';
import { FatalitiesService } from '../services/fatalities.service';

@Component({
  selector: 'app-fatalities',
  templateUrl: './fatalities.component.html',
  styleUrls: ['./fatalities.component.scss']
})
export class FatalitiesComponent implements OnInit {

  displayedColumns: string[] = ['state', 'country', 'diffFromPrevDay', 'percentDiff', 'latestFatalities'];
  dataSource = new MatTableDataSource<FatalitiesData>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(public fatalitiesService: FatalitiesService) { }

  ngOnInit(): void {
    this.fatalitiesService.getFatalitiesData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<FatalitiesData>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
