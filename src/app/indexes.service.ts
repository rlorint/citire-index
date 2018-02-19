import { Injectable } from '@angular/core';
import { Indexes } from './indexes';
import { INDEXES } from './mock-indexes';
import { TENANTS } from './mock-tenants';

@Injectable()
export class IndexesService {

  constructor() { }

  getIndexesByTenantId(id: number): Indexes[] {
    let indexesByTenantId: Indexes [] = [];
    for(let i=0; i < INDEXES.length; i++)
    {
      if(INDEXES[i].tenantId == id) {
        console.log("am gasit"+INDEXES[i]);
        indexesByTenantId.push(INDEXES[i]);
      }
    }
    return indexesByTenantId;
  }

  addIndexForTenant(index: Indexes): void {
    console.log("urmeaza sa adaugam ");
    console.log(index);
    INDEXES.push(index);
  }

}
