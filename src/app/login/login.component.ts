import { Component, OnInit } from '@angular/core';
import { Tenant } from './tenant'
import { SessionService } from '../session.service'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userToLogin: Tenant = {};
  errorMessage = false;

  login(): void {
    if (this.sessionService.checkCredentials(this.userToLogin)) {
      console.log("yeyy ai intrat!");
      this.errorMessage = false;
      this.router= Router;
      this.router.navigateByUrl('/login');
    }
    else
      this.errorMessage = true;

  }

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

}
