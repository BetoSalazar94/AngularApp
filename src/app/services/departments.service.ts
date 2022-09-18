import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

 urlAPI = "https://localhost:44344/api/Department";
 result;

  constructor(private http:HttpClient) { }

  getDepartments(){
    //const url = "api/Enterprise";
    return this.http.get(`${this.urlAPI}`).pipe(
      tap(res => this.result  = res));
  }

  saveDepartment(department){
    
    const objectDepartment = {
      createdBy: department.createdBy,
      createdDate: department.createdDate,
      status:1,
      description:department.description,
      name:department.name,
      phone:department.phone ,
      enterprisesId: department.enterprisesId
      
    } 

    return this.http.post(`${this.urlAPI}`,objectDepartment);
    
  }

  editDepartment(department){

    const objectDepartment = {

      id: department.id,
      modifiedBy: department.modifiedBy,
      modifiedDate: department.modifiedDate,
      status:1,
      description:department.description,
      name:department.name,
      phone:department.phone ,
      enterprisesId: department.enterprisesId

    }

    return this.http.put(`${this.urlAPI}`,objectDepartment);

  }


  searchEnterprise(id){
    
     return this.http.get(`${this.urlAPI}/${id}`).pipe(
      tap(res => this.result  = res));

  }


  
}
