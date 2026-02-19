import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from '../models/serie'; 

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private readonly url = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url);
  }

  create(serie: Serie): Observable<any> {
    return this.http.post<any>(this.url, serie);
  }
}