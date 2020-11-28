import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CuredData } from '../models/cured-data';

@Injectable({
  providedIn: 'root'
})
export class CuredService {

  private curedURL: string;

  constructor(private httpClient: HttpClient) { 
    this.curedURL = 'http://localhost:8080/cured';
  }

  getAllCuredData(): Observable<any> {
    return this.httpClient.get<CuredData>(this.curedURL).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      })
    )
  }
}
