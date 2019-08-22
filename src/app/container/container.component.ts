import { Component, OnInit } from '@angular/core';

import { PersonneService } from './container.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  personnes:any[];
 
  constructor(public personnesService:PersonneService) { }

  ngOnInit() {
    this.personnes=this.personnesService.personnes;
  }

  delete(i)
  {
   
    this.personnesService.personnes.splice(i,1);
  }
}
