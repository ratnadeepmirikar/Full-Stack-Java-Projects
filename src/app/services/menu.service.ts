import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';
import { MenuDetailsComponent } from '../components/menu-details/menu-details.component';

const baseUrl = 'http://localhost:8089/api/menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(baseUrl);
  }

  get(menuid: any): Observable<Menu> {
    return this.http.get(`${baseUrl}/${menuid}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(menuid: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${menuid}`, data);
  }

  delete(menuid: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${menuid}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<Menus[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }
}