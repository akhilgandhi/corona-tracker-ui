import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmData } from '../models/confirm-data';
import { DiscoveredService } from '../services/discovered.service';

@Component({
  selector: 'app-discovered',
  templateUrl: './discovered.component.html',
  styleUrls: ['./discovered.component.scss']
})
export class DiscoveredComponent implements OnInit {

  displayedColumns: string[] = ['state', 'country', 'diffFromPrevDay', 'percentDiff', 'latestConfirmData'];
  dataSource = new MatTableDataSource<ConfirmData>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(public discoveredService: DiscoveredService) { }

  ngOnInit(): void {
    this.discoveredService.getConfirmCaseData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<ConfirmData>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
