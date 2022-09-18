import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  urlAPI = "https://localhost:44344/api/Enterprise";
  result;
  constructor(private http:HttpClient) { }

  getEnterprises(){
    //const url = "api/Enterprise";
    return this.http.get(`${this.urlAPI}`).pipe(
      tap(res => this.result  = res));
  }

  saveEnterprises(enterprise){
    
    const objectEnterprise = {
      createdBy: enterprise.createdBy,
      createdDate: enterprise.createdDate,
      status:1,
      address:enterprise.address,
      name:enterprise.name,
      phone:enterprise.phone 

    }
    
 
    return this.http.post(`${this.urlAPI}`,objectEnterprise);
    
  }

  editEnterprise(enterprise){

    const objectEnterprise = {

      id: enterprise.id,
      modifiedBy: enterprise.modifiedBy,
      modifiedDate: enterprise.modifiedDate,
      status:1,
      address:enterprise.address,
      name:enterprise.name,
      phone:enterprise.phone 

    }

    return this.http.put(`${this.urlAPI}`,objectEnterprise);

  }


  searchEnterprise(id){
    
     return this.http.get(`${this.urlAPI}/${id}`).pipe(
      tap(res => this.result  = res));

  }



  
}