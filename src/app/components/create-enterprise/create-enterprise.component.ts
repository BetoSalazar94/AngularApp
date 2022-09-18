import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnterprisesService } from '../../services/enterprises.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-create-enterprise',
  templateUrl: './create-enterprise.component.html',
  styleUrls: ['./create-enterprise.component.css']
})
export class CreateEnterpriseComponent implements OnInit {

  
  forma:FormGroup;

  constructor(private fb:FormBuilder, private enterpriseService:EnterprisesService,private datepipe: DatePipe) {  
    this.crearFormulario();
  }

  ngOnInit(): void {
    
  }

  crearFormulario()
  {

        this.forma = this.fb.group({
          createdBy  :[''],
          address:[''],
          name  :[''],
          phone  :['']
        });
      
  }




  guardar(){

    const enterpriseObject = {
      
     
        createdBy: this.forma.get('createdBy').value,
        createdDate:this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
        status:1,
        address:this.forma.get('address').value,
        name:this.forma.get('name').value,
        phone:this.forma.get('phone').value
      
    }
    

    console.log(enterpriseObject);
    
    return this.enterpriseService.saveEnterprises(enterpriseObject).subscribe(
      resp => {console.log(resp)}
    );  

  }

}
