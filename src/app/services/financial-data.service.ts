import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  constructor(private http: HttpClient) { }

  public getFinTable(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/1d8045fe-ac94-4d35-43f4-08da142f80b1`);
  }
}
