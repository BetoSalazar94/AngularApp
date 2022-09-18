import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnterprisesService } from '../../services/enterprises.service';
import { DatePipe } from '@angular/common'
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-create-departments',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.css']
})
export class CreateDepartmentsComponent implements OnInit {
  
  forma:FormGroup;
  enterprises;

  constructor(private fb:FormBuilder, private enterpriseService:EnterprisesService,private datepipe: DatePipe, private departmentService: DepartmentsService) { 
    this.crearFormulario();
    this.getEnterprises();
  }

  ngOnInit(): void {
  }

  crearFormulario()
  {

        this.forma = this.fb.group({
          createdBy  :[''],
          description:[''],
          name  :[''],
          phone  :[''],
          enterprisesSelect  :['']
        });
      
  }

  getEnterprises()
  {
    this.enterpriseService.getEnterprises().subscribe(
      resp =>{ this.enterprises = resp; }
    );
  }

  guardar(){
      
    const objectDepartment = {
      createdBy: this.forma.get('createdBy').value,
      createdDate:this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      status:1,
      description:this.forma.get('description').value,
      name:this.forma.get('name').value,
      phone:this.forma.get('phone').value,
      enterprisesId: this.forma.get('enterprisesSelect').value
      
    } 

    return this.departmentService.saveDepartment(objectDepartment).subscribe(
      resp => {console.log(resp)});

  }

}
