import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EmpDataModel } from './model/emp.data.model';


export interface Config {
  endpointUrl: string;
  textfile: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class DatapullService {

  configUrl : string = 'assets/config.json';
  config    : Config | undefined;


  public getStats(empDataModel : EmpDataModel ): Observable<any> {
    let endpointUrl : string = (this.config ? this.config.endpointUrl : '');
    return this.http.post<any>(endpointUrl, empDataModel.toJson(), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private getConfig() {
    this.http.get<Config>(this.configUrl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    ).subscribe(
      (data : Config) => this.config = { ...data }
    );
  }

  constructor(private http: HttpClient) {
    this.getConfig();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error
      );
    }

    return throwError(
      'Failure. Please try again later.'
    );
  }
}
