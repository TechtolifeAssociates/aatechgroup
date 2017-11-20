import { PortalService } from './../portal/portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css']
})
export class RegisterEmployerComponent implements OnInit {
  employer = {};
  service:PortalService;
  constructor(service:PortalService) {
    this.service = service;
   }

  ngOnInit() {
  }

  registerEmployer(employer){
    this.service.registerEmployer(employer);
  }

}
