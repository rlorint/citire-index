import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant'
import { SessionService } from '../session.service'
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userToLogin: Tenant = new Tenant();
  errorMessage = false;

  login(): void {
    this.sessionService.checkCredentials(this.userToLogin).subscribe( response => {
    // this.sessionService.checkCredentials(this.userToLogin).subscribe(response =>
    //   {
        console.log("Subscribing to get the users",response);
        if(response) {
          this.errorMessage = false;
          this.router.navigateByUrl('/tenant/'+this.userToLogin.id);
        }
        else {
          this.errorMessage = true;
        }

      });
    // if (this.sessionService.checkCredentials(this.userToLogin)) {
    //   console.log("yeyy ai intrat!");
    //   console.log(this.userToLogin.id);
    //   this.errorMessage = false;
    //   this.router.navigateByUrl('/tenant/'+this.userToLogin.id);
    // }
    // else
    //   this.errorMessage = true;

}

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

}
