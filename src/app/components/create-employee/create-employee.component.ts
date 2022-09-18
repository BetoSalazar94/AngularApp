import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  forma:FormGroup;
  
  constructor(private fb:FormBuilder, private emplyeeService:EmployeesService,private datepipe: DatePipe) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario()
  {

        this.forma = this.fb.group({
          createdBy  :[''],
          age:[''],
          email  :[''],
          name  :[''],
          position  :[''],
          surname  :['']
        });
      
  }

  guardar(){

    const objectEmployee = {
      createdBy:this.forma.get('createdBy').value ,
      createdDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      status:1,
      age: Number(this.forma.get('age').value),
      email:this.forma.get('email').value,
      name:this.forma.get('name').value ,
      position:this.forma.get('position').value,
      surname:this.forma.get('surname').value     
    } 
    
    console.log(objectEmployee);
    return this.emplyeeService.saveEmployee(objectEmployee).subscribe(
      resp => {console.log(resp)});

  }


}
