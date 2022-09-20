import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { CreateEnterpriseComponent } from './components/create-enterprise/create-enterprise.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EditEnterprisesComponent } from './components/edit-enterprises/edit-enterprises.component';
import { EditDepartmentsComponent } from './components/edit-departments/edit-departments.component';
import { CreateDepartmentsComponent } from './components/create-departments/create-departments.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavigateComponent } from './components/navigate/navigate.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EnterprisesComponent,
    DepartmentsComponent,
    CreateEnterpriseComponent,
    EditEnterprisesComponent,
    EditDepartmentsComponent,
    CreateDepartmentsComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    RegistroComponent,
    NavigateComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
