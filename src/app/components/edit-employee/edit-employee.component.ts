import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employees;
  forma:FormGroup;

  constructor(private fb:FormBuilder, private employeeService:EmployeesService,private datepipe: DatePipe) { 
    this.crearFormulario();
    this.getEmployees();
  }

  ngOnInit(): void {
  }

  crearFormulario()
  {

        this.forma = this.fb.group({
          modifiedBy  :[''],
          employeeSelect: [''],
          age:[''],
          email  :[''],
          name  :[''],
          position  :[''],
          surname  :['']
        });
      
  }

  getEmployees(){

    this.employeeService.getEmployees().subscribe(
      resp =>{ this.employees = resp; }
    );

  }

  guardar(){

    const objectEmployee = {
      id:this.forma.get('employeeSelect').value,
      modifiedBy:this.forma.get('modifiedBy').value ,
      modifiedDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      status:1,
      age: Number(this.forma.get('age').value),
      email:this.forma.get('email').value,
      name:this.forma.get('name').value ,
      position:this.forma.get('position').value,
      surname:this.forma.get('surname').value     
    } 
    
    console.log(objectEmployee);
    return this.employeeService.editEmployee(objectEmployee).subscribe(
      resp => {console.log(resp)});
    

  }

}
