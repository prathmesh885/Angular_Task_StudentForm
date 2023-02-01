import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { StudentTableComponent } from './shared/components/student-table/student-table.component';
import { StudentformComponent } from './shared/components/studentform/studentform.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'student', component: StudentTableComponent
  },
  {
    path: 'studentForm', component: StudentformComponent
  },
  {
    path: 'pagenotfound', component: PagenotfoundComponent
  },
  {
    path: '**', redirectTo: 'pagenotfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
