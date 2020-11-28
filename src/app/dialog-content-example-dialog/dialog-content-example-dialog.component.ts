import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Homepage } from '../models/homepage';

export interface CardNames {
  name : 'discovered cases' | 'active cases' | 'deceased cases' | 'recovered cases';
  homepage : Homepage;
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.scss']
})
export class DialogContentExampleDialogComponent implements OnInit {

  cardName: string;
  homepage: Homepage;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CardNames) { 
    this.cardName = data.name;
    this.homepage = data.homepage;
  }

  ngOnInit(): void {

  }

}
