import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {AuthGuard} from "./components/admin/user/guards/auth.guard";
import {Role} from "./components/admin/user/model/role";
import {TransactionListComponent} from "./components/admin/transaction-list/transaction-list.component";
import {ProductListComponent} from "./components/admin/product-list/product-list.component";
import {UserListComponent} from "./components/admin/user-list/user-list.component";
import {DetailComponent} from "./components/admin/user/detail/detail.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {UnathorizedComponent} from "./components/admin/error/unathorized/unathorized.component";
import {NotfoundComponent} from "./components/admin/error/notfound/notfound.component";
import {HomeComponent} from "./components/admin/user/home/home.component";
import {LoginComponent} from "./components/admin/user/login/login.component";
import {RegisterComponent} from "./components/admin/user/register/register.component";
import {ProfileComponent} from "./components/admin/user/profile/profile.component";

const routes: Routes = [
  //Main page
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //User pages
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {path: 'detail', component: DetailComponent},
  {path: 'detail/:id', component: DetailComponent},

  //admin panel
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },
  {
    path: 'transaction-list',
    component: TransactionListComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.ADMIN]}
  },

  //error pages
  {path: '404', component: NotfoundComponent},
  {path: '401', component: UnathorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
