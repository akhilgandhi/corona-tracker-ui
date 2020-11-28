import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CuredData } from '../models/cured-data';
import { CuredService } from '../services/cured.service';

@Component({
  selector: 'app-cured',
  templateUrl: './cured.component.html',
  styleUrls: ['./cured.component.scss']
})
export class CuredComponent implements OnInit {

  displayedColumns: string[] = ['state', 'country', 'diffFromPrevDay', 'percentDiff', 'latestRecoveredData'];
  dataSource = new MatTableDataSource<CuredData>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(public curedService: CuredService) { }

  ngOnInit(): void {
    this.curedService.getAllCuredData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<CuredData>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
