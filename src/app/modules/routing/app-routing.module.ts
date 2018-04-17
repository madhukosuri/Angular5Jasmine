import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from '../../sign-up/sign-up.component';
import { LoginComponent } from '../../login/login.component';
import { UsersComponent } from '../../users/users.component';
import { OrdersComponent } from '../../orders/orders.component';
import {ProductsComponent} from '../../products/products.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
