import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FatalitiesData } from '../models/fatalities-data';

@Injectable({
  providedIn: 'root'
})
export class FatalitiesService {

  private fatalitiesURL: string;

  constructor(private httpClient: HttpClient) { 
    this.fatalitiesURL = 'http://localhost:8080/fatalities';
  }

  getFatalitiesData(): Observable<any> {
    return this.httpClient.get<FatalitiesData>(this.fatalitiesURL).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      })
    )
  }
}
