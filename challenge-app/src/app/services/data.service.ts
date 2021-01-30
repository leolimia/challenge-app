import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:5000';

  //metodo para pedir lista de datos
  getList(): Observable<Data> {
    //puedo ponerle mi direccion api como parametro pero para no repetir... arriba lo guardo como un prro
    return this.http.get(`${this.API_URI}/users`)
  }

  getDataUser(id: string): Observable<Data> {
    return this.http.get(`${this.API_URI}/users/${id}`)
  }

  saveDataUser(data: Data): Observable<Data> {
    return this.http.post(`${this.API_URI}/users`, data);
  }

  deleteDataUser(id: string): Observable<Data> {
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  updateDataUser(id: number | undefined, updatedDataUser: Data): Observable<any> {
    return this.http.put(`${this.API_URI}/users/edit/${id}`, updatedDataUser,
      { responseType: 'text' });
  }



}
