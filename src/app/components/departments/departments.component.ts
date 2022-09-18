import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments;
  constructor(private departmentService:DepartmentsService) { }

  ngOnInit(): void {

    this.departmentService.getDepartments().subscribe(
      resp =>{ this.departments = resp;
      
      }
    );

    

  }

  


}
