import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

import { map, catchError, tap } from 'rxjs/operators';

const endpointLogin = '/Banca-web/api/usuario/1';

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

  getListaCuentas(id: number): Observable<any> {
    /* return this.http.get(endpointLogin).pipe(
      map(this.extractData)); */
      const url="/Banca-web/api/usuario/"+id;
      return this.http.get<any>(url);
  }
/*   obtenerPrestamos():Observable<any[]>{
    const url ="http://40.121.87.240:8086/ServicioDetallePrestamo/api/detalleprestamo";
    return this.http.get<any[]>(url);
  } */
}