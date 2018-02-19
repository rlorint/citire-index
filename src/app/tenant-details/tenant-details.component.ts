import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Indexes } from '../indexes';
import { IndexesService } from '../indexes.service';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {

  loggedInTenant: Tenant;
  currentIndexes: Indexes[];
  newIndex = new Indexes();



  constructor(private userService: UserService, private route: ActivatedRoute, private indexesService: IndexesService) { }

  ngOnInit() {
    this.getTenantById();
    this.getIndexesByTenantId();

  }

  getTenantById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loggedInTenant = this.userService.getUserById(id);
  }

  getIndexesByTenantId(): Indexes[] {
    this.currentIndexes = this.indexesService.getIndexesByTenantId(this.loggedInTenant.id);
    return this.currentIndexes;
  }

  addIndex(index: Indexes): void {
    index.tenantId = this.loggedInTenant.id;
    index.id = 9;
    this.indexesService.addIndexForTenant(index);
  }
}
