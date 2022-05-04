import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  constructor(private http: HttpClient) { }

  public getFinTable(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/ce22eedde5a9404288ce38024ce198b9`);
  }
}
