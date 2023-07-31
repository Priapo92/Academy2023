import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  // Restituisce le regioni//
  getAllRegions(): Observable<any[]> {
    const url = 'api/regions';
    return this.http.get<any[]>(url)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('/api/users')
  }

}
