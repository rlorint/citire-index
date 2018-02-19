import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TENANTS } from './mock-tenants';
import { Tenant } from './tenant'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

private heroesUrl = 'api/tenants';

constructor(private http: HttpClient) { }

  getUsers(): Observable<Tenant[]>{
    console.log("get users method");
    return this.http.get<Tenant[]>(this.heroesUrl);
  };

  getUserById(id: number): Tenant{
    return TENANTS.find(bla => bla.id === id);
  }


}
