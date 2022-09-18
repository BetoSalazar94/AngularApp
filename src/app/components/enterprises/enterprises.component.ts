import { Component, OnInit } from '@angular/core';
import { EnterprisesService } from '../../services/enterprises.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {
  

  constructor(private enterprise:EnterprisesService) { }
  
  enterprises;

  ngOnInit(): void {
      
    this.enterprise.getEnterprises().subscribe(
        resp =>{ this.enterprises = resp; console.log(this.enterprises);
        
        }
      );
   
  }

  



}
