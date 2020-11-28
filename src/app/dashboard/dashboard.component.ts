import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { Homepage } from '../models/homepage';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'corona-tracker-ui';
  homepage: Homepage;

  constructor(public dialog: MatDialog, private homepageService: HomepageService) {}

  ngOnInit(): void {
    this.homepageService.getHomePageData().subscribe(data => {
      this.homepage = data;
      this.homepage.mortalityRate = (((this.homepage.totalFatalities)/7900000000) * 1000000).toFixed(2); 
    });
  }

  openDialog(cardName: string) {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      data: {
        name: cardName,
        homepage: this.homepage
      }
    })
  }
}
