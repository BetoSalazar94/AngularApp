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




const routes: Routes = [
  {path:'employees',component:EmployeesComponent},
  {path:'enterprises',component:EnterprisesComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'createEnterprises',component:CreateEnterpriseComponent},
  {path:'editEnterprises',component:EditEnterprisesComponent},
  {path:'createDepartments',component:CreateDepartmentsComponent},
  {path:'editDepartments',component:EditDepartmentsComponent},
  {path:'createEmployees',component:CreateEmployeeComponent},
  {path:'editEmployees',component:EditEmployeeComponent},
  {path:'**',pathMatch:'full',redirectTo:'enterprises'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
