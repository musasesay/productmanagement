import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {UserListComponent} from './components/admin/user-list/user-list.component';
import {ProductListComponent} from './components/admin/product-list/product-list.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

// import {
//   MatButtonModule, MatCardModule,
//   MatInputModule, MatListModule,
//   MatToolbarModule, MatSelectModule,
//   MatFormFieldModule, MatTableModule,
//   MatPaginatorModule, MatSortModule,
//   MatProgressBarModule, MatIconModule
// } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TransactionListComponent} from './components/admin/transaction-list/transaction-list.component';
import {LoginComponent} from "./components/admin/user/login/login.component";
import {RegisterComponent} from "./components/admin/user/register/register.component";
import {ProfileComponent} from "./components/admin/user/profile/profile.component";
import {DetailComponent} from "./components/admin/user/detail/detail.component";
import {HomeComponent} from "./components/admin/user/home/home.component";
import {UserTemplateComponent} from "./components/admin/template/user-template/user-template.component";
import {UnathorizedComponent} from "./components/admin/error/unathorized/unathorized.component";
import {AdminTemplateComponent} from "./components/admin/template/admin-template/admin-template.component";
import {NotfoundComponent} from "./components/admin/error/notfound/notfound.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    DetailComponent,
    DashboardComponent,
    UserListComponent,
    ProductListComponent,
    UserTemplateComponent,
    AdminTemplateComponent,
    NotfoundComponent,
    UnathorizedComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
