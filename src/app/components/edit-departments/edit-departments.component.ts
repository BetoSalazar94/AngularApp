import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnterprisesService } from '../../services/enterprises.service';
import { DatePipe } from '@angular/common'
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

  forma:FormGroup;
  enterprises;
  departments;

  constructor(private fb:FormBuilder, private enterpriseService:EnterprisesService,private datepipe: DatePipe, private departmentService: DepartmentsService) { 
    
    this.getEnterprises();
    this.getDepartment();
    this.crearFormulario();

  }

  ngOnInit(): void {
  }

  crearFormulario()
  {

        this.forma = this.fb.group({
          modifiedBy  :[''],
          description:[''],
          name  :[''],
          phone  :[''],
          departmentsSelect  :[''],
          enterprisesSelect : ['']
        });
      
  }

  getEnterprises()
  {
    this.enterpriseService.getEnterprises().subscribe(
      resp =>{ this.enterprises = resp; }
    );
  }

  getDepartment(){
    this.departmentService.getDepartments().subscribe(
      resp =>{ this.departments = resp; }
    );
  }

  guardar(){

    const objectDepartment = {

      id: this.forma.get('departmentsSelect').value,
      modifiedBy: this.forma.get('modifiedBy').value,
      modifiedDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      status:1,
      description:this.forma.get('description').value,
      name:this.forma.get('name').value,
      phone:this.forma.get('phone').value ,
      enterprisesId: this.forma.get('enterprisesSelect').value

  }

  console.log(objectDepartment);
  return this.departmentService.editDepartment(objectDepartment).subscribe(
    resp =>  {console.log(resp);}
  );
  
}

}
