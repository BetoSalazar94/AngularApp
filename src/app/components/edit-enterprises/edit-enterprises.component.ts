import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnterprisesService } from '../../services/enterprises.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-enterprises',
  templateUrl: './edit-enterprises.component.html',
  styleUrls: ['./edit-enterprises.component.css']
})
export class EditEnterprisesComponent implements OnInit {

  forma:FormGroup;
  enterprises;

  constructor(private fb:FormBuilder, private enterpriseService:EnterprisesService,private datepipe: DatePipe) { 
      this.crearFormulario();
      this.getEnterprises();
  }

  ngOnInit(): void {
  }
  
  crearFormulario()
  {

        this.forma = this.fb.group({
          modifiedBy  :[''],
          address:[''],
          name  :[''],
          phone  :[''],
          enterprises:['']
        });  
  }

  getEnterprises()
  {
    this.enterpriseService.getEnterprises().subscribe(
      resp =>{ this.enterprises = resp; }
    );
  }

  guardar(){

    const enterpriseObject = {
      
      id:this.forma.get('enterprises').value,
      modifiedBy: this.forma.get('modifiedBy').value,
      modifiedDate:this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      status:1,
      address:this.forma.get('address').value,
      name:this.forma.get('name').value,
      phone:this.forma.get('phone').value
    
  }

    console.log(enterpriseObject);
    return this.enterpriseService.editEnterprise(enterpriseObject).subscribe(
    resp => {console.log(resp)}
    );

  }

}
