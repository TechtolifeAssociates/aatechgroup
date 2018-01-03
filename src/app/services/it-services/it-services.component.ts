import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal/portal.service';

@Component({
  selector: 'app-it-services',
  templateUrl: './it-services.component.html',
  styleUrls: ['./it-services.component.css']
})
export class ItServicesComponent implements OnInit {

  constructor(service:PortalService) { 
    this.service = service;
  }
  contentDetails : any;
  service:PortalService;
  ngOnInit() {     
      this.service.getContent('ITSERVICES_BODY').subscribe(
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
