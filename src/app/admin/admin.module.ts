import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent }  from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '.././modules/material/material.module';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import {UserFormComponent} from './user/user.form.component';
import {ProductFormComponent} from './product/product.form.component';

import {UserService} from '../services/user.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports:[
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ProductComponent,
    ProductFormComponent,
    UserComponent,
    UserFormComponent,
    OrderComponent
  ],
  providers: [UserService],
})

export class AdminModule {
}
