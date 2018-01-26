import { Injectable } from '@angular/core';
import { Tenant } from './tenant';
import { UserService } from './user.service';


@Injectable()
export class SessionService {
  tenants: Tenant[];
  tenants = this.userService.getUsers();
  checkCredentials(userToLogin: Tenant): boolean {
    console.log(this.tenants);
    for(let i = 0; i<this.tenants.length; i++) {
      console.log(this.tenants[i]);
      if (this.tenants[i].username == userToLogin.username && this.tenants[i].pass == userToLogin.pass)
        return true;
    }
    return false;
  }
  constructor(private userService : UserService) { }

}
