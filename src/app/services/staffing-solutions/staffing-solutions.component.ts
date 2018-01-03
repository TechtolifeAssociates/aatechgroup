import { Component, OnInit } from '@angular/core';
import { PortalService } from '../../portal/portal.service';

@Component({
  selector: 'app-staffing-solutions',
  templateUrl: './staffing-solutions.component.html',
  styleUrls: ['./staffing-solutions.component.css']
})
export class StaffingSolutionsComponent implements OnInit {
constructor(service:PortalService) { 
    this.service = service;
  }
  contentDetails : any;
  service:PortalService;
  ngOnInit() {     
      this.service.getContent('STAFFINGSOLUTION_BODY').subscribe(
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
