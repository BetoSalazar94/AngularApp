import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateEnterpriseComponent } from './components/create-enterprise/create-enterprise.component';
import { EditEnterprisesComponent } from './components/edit-enterprises/edit-enterprises.component';
import { CreateDepartmentsComponent } from './components/create-departments/create-departments.component';
import { EditDepartmentsComponent } from './components/edit-departments/edit-departments.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'employees',component:EmployeesComponent,canActivate:[AuthGuard]},
  {path:'enterprises',component:EnterprisesComponent,canActivate:[AuthGuard]},
  {path:'departments',component:DepartmentsComponent,canActivate:[AuthGuard]},
  {path:'createEnterprises',component:CreateEnterpriseComponent,canActivate:[AuthGuard]},
  {path:'editEnterprises',component:EditEnterprisesComponent,canActivate:[AuthGuard]},
  {path:'createDepartments',component:CreateDepartmentsComponent,canActivate:[AuthGuard]},
  {path:'editDepartments',component:EditDepartmentsComponent,canActivate:[AuthGuard]},
  {path:'createEmployees',component:CreateEmployeeComponent,canActivate:[AuthGuard]},
  {path:'editEmployees',component:EditEmployeeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistroComponent},
  {path:'navBar',component:NavigateComponent,canActivate:[AuthGuard]},
  {path:'**',pathMatch:'full',redirectTo:'login'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
