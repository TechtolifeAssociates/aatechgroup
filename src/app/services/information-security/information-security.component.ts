import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal/portal.service';

@Component({
  selector: 'app-information-security',
  templateUrl: './information-security.component.html',
  styleUrls: ['./information-security.component.css']
})
export class InformationSecurityComponent implements OnInit {

 constructor(service:PortalService) { 
    this.service = service;
  }
  contentDetails : any;
  service:PortalService;
  ngOnInit() {     
      this.service.getContent('INFORMATIONSECURITY_BODY').subscribe(
        data => {
         console.log('data -- '+data);
         this.contentDetails = data;        
        },
        error => {
          this.contentDetails = [];
          console.error('error -- '+error);
        }
      )
  }


}
