import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

import { map, catchError, tap } from 'rxjs/operators';

const endpointLogin = '/Banca-web/api/usuario/';

@Injectable({
  providedIn: 'root'
})
//estoy adentrook

export class LoginService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getListaCuentas(): Observable<any> {
    return this.http.get(endpointLogin).pipe(
      map(this.extractData));
  }
}