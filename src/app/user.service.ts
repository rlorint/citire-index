import { Injectable } from '@angular/core';
import { TENANTS } from './mock-tenants';

@Injectable()
export class UserService {
  getUsers(): Tenant[]{
    return TENANTS;
  };

  getUserById(id: number): Tenant{
    return TENANTS.find(bla => bla.id === id);
  }
  constructor() { }

}
