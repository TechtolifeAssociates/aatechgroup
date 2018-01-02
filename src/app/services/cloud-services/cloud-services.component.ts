import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal/portal.service';

@Component({
  selector: 'app-cloud-services',
  templateUrl: './cloud-services.component.html',
  styleUrls: ['./cloud-services.component.css']
})
export class CloudServicesComponent implements OnInit {

 constructor(service:PortalService) { 
    this.service = service;
  }
  contentDetails : any;
  service:PortalService;
  ngOnInit() {     
      this.service.getContent('CLOUDSERVICES_BODY').subscribe(
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
