import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class EmployeesService {

  urlAPI = "https://localhost:44344/api/Employees";
  result;
  constructor(private http:HttpClient) { }

  getEmployees(){
    //const url = "api/Enterprise";
    return this.http.get(`${this.urlAPI}`).pipe(
      tap(res => this.result  = res));
  }

  saveEmployee(employee){
    
    const objectEmployee = {
      createdBy: employee.createdBy,
      createdDate: employee.createdDate,
      status:1,
      age:employee.age,
      email:employee.email,
      name:employee.name ,
      position:employee.position ,
      surname:employee.surname      
    } 
    return this.http.post(`${this.urlAPI}`,objectEmployee);
  }


  editEmployee(employee){
    
    const objectEmployee = {
      id: employee.id,
      modifiedBy: employee.modifiedBy,
      modifiedDate: employee.modifiedDate,
      status:1,
      age:employee.age,
      email:employee.email,
      name:employee.name ,
      position:employee.position ,
      surname:employee.surname      
    } 
    return this.http.put(`${this.urlAPI}`,objectEmployee);
  }
  

}
