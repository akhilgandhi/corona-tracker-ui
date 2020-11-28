import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmData } from '../models/confirm-data';

@Injectable({
  providedIn: 'root'
})
export class DiscoveredService {

  private discoveredURL: string;

  constructor(private httpClient: HttpClient) { 
    this.discoveredURL = 'http://localhost:8080/discovered';
  }

  getConfirmCaseData(): Observable<any> {
    return this.httpClient.get<ConfirmData>(this.discoveredURL).pipe(
      catchError((error: any) => {
        console.error(error);
        return of();
      })
    );
  }
}
