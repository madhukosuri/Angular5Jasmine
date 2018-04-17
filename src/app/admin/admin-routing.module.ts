import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent }  from './admin-dashboard.component';
import {ManageCrisesComponent} from './manage-crises.component'
import {AdminComponent} from './admin.component'

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
