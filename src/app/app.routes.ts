import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeUserComponent } from './home-user/home-user.component';
import { Component } from '@angular/core';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminCheakLoanComponent } from './admin-cheak-loan/admin-cheak-loan.component';
import { AdminOneLoanComponent } from './admin-one-loan/admin-one-loan.component';
import { AdminDetailsEmpComponent } from './admin-details-emp/admin-details-emp.component';
import { AdminAddEmpComponent } from './admin-add-emp/admin-add-emp.component';
import { AdminRepBranComponent } from './admin-rep-bran/admin-rep-bran.component';
import { AdminRepLoanComponent } from './admin-rep-loan/admin-rep-loan.component';
import { HomeOtherEmpComponent } from './home-other-emp/home-other-emp.component';
import { LogComponent } from './log/log.component';
import { IndexComponent } from './home/index/index.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
export const routes: Routes = [
    {path:"admin/:id",component:HomeAdminComponent},
    {path:"admin_cheakLoan/:id",component:AdminCheakLoanComponent},
    {path:"admin_details_Loan",component:AdminOneLoanComponent},
    {path:"admin_addEmployee/:id",component:AdminAddEmpComponent},
    {path:"admin_ReporetBranch",component:AdminRepBranComponent},
    {path:"admin_ReporetLoan",component:AdminRepLoanComponent},

    {path:"login",component:LogComponent},

    //
    { path: 'home/index', component: IndexComponent },
    { path: 'home/about', component: AboutComponent },
    { path: 'home/contact', component: ContactComponent },
    // 

    {path:"employee/:id",component:HomeOtherEmpComponent},
    {path:"homeuser/:id",component:HomeUserComponent},
    {path:"*",redirectTo:"home-user",pathMatch:"full"}
    // { path: '**', redirectTo: 'homeuser' }
];
