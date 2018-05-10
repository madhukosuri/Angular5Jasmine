import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent }  from './admin-dashboard.component';
import {ManageCrisesComponent} from './manage-crises.component'
import {AdminComponent} from './admin.component'
import {OrderComponent} from './order/order.component'
import {ProductComponent} from './product/product.component'
import {UserComponent} from './user/user.component'
import {UserFormComponent} from './user/user.form.component';
import {ProductFormComponent} from './product/product.form.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'products', component: ProductComponent },
          { path: 'users', component: UserComponent },
          { path: 'users/new', component: UserFormComponent },
          { path: 'products/new', component: ProductFormComponent },
          { path: 'orders', component: OrderComponent },
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
