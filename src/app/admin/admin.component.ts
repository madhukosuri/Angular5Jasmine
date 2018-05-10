import { Component } from '@angular/core';

@Component({
   template: `
     <mat-toolbar><a routerLink="/admin/dashboard" style="text-decoration: none;color: #3f51b5"><b>ADMIN DASHBOARD</b></a></mat-toolbar>
     <div fxLayout="row wrap">
       <mat-drawer-container class="dashboard-container">
         <mat-drawer mode="side" opened="true" style="width: 14em;background-color: #4053bb">
           <mat-list role="list">
             <a mat-list-item routerLink="./users" routerLinkActive="active" role="listitem">Users</a>
             <a mat-list-item routerLink="./products" routerLinkActive="active" role="listitem">Products</a>
             <a mat-list-item routerLink="./orders" routerLinkActive="active" role="listitem">Orders</a>
           </mat-list>
         </mat-drawer>
         <mat-drawer-content><router-outlet></router-outlet></mat-drawer-content>
       </mat-drawer-container>
     </div>
   `
})
export class AdminComponent {
}
