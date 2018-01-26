import { Component, OnInit } from '@angular/core';
import { Tenant } from './tenant';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {

  loggedInTenant: Tenant;


  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTenantById();
  }

  getTenantById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loggedInTenant = this.userService.getUserById(id);
  }

}
