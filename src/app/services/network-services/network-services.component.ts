import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal/portal.service';

@Component({
  selector: 'app-network-services',
  templateUrl: './network-services.component.html',
  styleUrls: ['./network-services.component.css']
})
export class NetworkServicesComponent implements OnInit {

  constructor(service:PortalService) { 
    this.service = service;
  }
  contentDetails : any;
  service:PortalService;
  ngOnInit() {     
      this.service.getContent('NETWORKSERVICES_BODY').subscribe(
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
