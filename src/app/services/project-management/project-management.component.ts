import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal/portal.service';
@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {
 constructor(service:PortalService) { 
    this.service = service;
  }
  contentDetails : any;
  service:PortalService;
  ngOnInit() {     
      this.service.getContent('PROJECTMANAGEMENT_BODY').subscribe(
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
