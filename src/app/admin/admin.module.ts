import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent
  ]
})

export class AdminModule {
}
