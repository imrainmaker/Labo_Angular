import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  users: User[] = [];
  urlAPI: string = "https://localhost:7115/api/User"

  constructor(private _http: HttpClient) {}

  getAll() : Observable<User[]>{
    return this._http.get<User[]>(this.urlAPI)
  };
}
