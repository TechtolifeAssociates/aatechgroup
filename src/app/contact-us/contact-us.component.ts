import { PortalService } from './../portal/portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {  
  contact = {};
  service:PortalService;
  constructor(service:PortalService) {  
    this.service = service;
  }

  save(contact){
    console.log(contact);
    this.service.contactUs(contact);
  }


  ngOnInit() {
    
  }

}
