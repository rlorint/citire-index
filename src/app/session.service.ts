import { Injectable } from '@angular/core';
import { Tenant } from './tenant';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SessionService {

  tenants: Tenant[]
  finalResult: boolean;

  // getTenants() : void {
  //    this.userService.getUsers().subscribe(response => {
  //      this.tenants = response;
  //      console.log(this.tenants);
  //    });
  // }



  checkCredentials(userToLogin: Tenant): Observable<boolean> {
    return Observable.create(observer => {

      this.userService.getUsers().subscribe(response => {
        this.tenants = response;
        console.log(response);
        let found = false;

        for(let i = 0; i<this.tenants.length; i++) {
          console.log("verifying each tenant");
          console.log(this.tenants[i]);
          if (this.tenants[i].username == userToLogin.username && this.tenants[i].pass == userToLogin.pass)
            {
              userToLogin.id = this.tenants[i].id;
              found = true;
              break;
            }
        }
        observer.next(found);
    });
  });


  }

  constructor(private userService : UserService) { }

}
